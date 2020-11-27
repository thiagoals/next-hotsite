import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { GraphQLClient }  from 'graphql-request';
import {query} from './../models/LandingPageGraphQL';
const App = dynamic(()=>import ('./../templates/'+process.env.Template+'/App'))
import { useState, useEffect } from "react"
import  createLandingPageMock  from './../lib/mirage/landingPageMock';

// If we want to use mirage server, then create server
if(process.env.USE_MIRAGE_SERVER){
    createLandingPageMock();
}
// Importing template here
export default function Index({landingPageProps}){
    /**
     * TODO - Understand how does mirage works
     */
    if(process.env.USE_MIRAGE_SERVER){
        let [landingPage, setLandingPageProps] = useState([])
        //console.log(landingPageProps.landingPage);
        //landingPageProps = data;
        useEffect(() => {
            fetch("/api/landingPage")
                .then((res) => res.json())
                .then((json) => {
                    setLandingPageProps(json)
                })
            }, 
        [])
        console.log(landingPage);
        if(landingPage?.landingPage!=undefined){
            landingPageProps = landingPage;
        }
    }
    return (
        <App {...landingPageProps.landingPage }/>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const endpoint = `${process.env.WebServicePath}/graphql`;
    const graphQLClient = new GraphQLClient(endpoint);
    
    let response = await graphQLClient.request(query);
    return{
        props: {
            landingPageProps: response,
        },
        revalidate:3600,
    }
};
