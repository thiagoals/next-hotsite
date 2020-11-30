import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { GraphQLClient }  from 'graphql-request';
import {query} from './../models/LandingPageGraphQL';
const App = dynamic(()=>import ('../templates/'+process.env.Template+'/App'))
import {landingPage} from './../lib/mirage/landingPageMock';


// Importing template here
export default function Index({landingPageProps}){
    
    landingPageProps = (process.env.UseMock)?landingPage:landingPageProps;
    return (
        <App {...landingPageProps.landingPage }/>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    let response = {};
    if(!process.env.UseMock){
        const endpoint = `${process.env.WebServicePath}/graphql`;
        const graphQLClient = new GraphQLClient(endpoint);
        
        response = await graphQLClient.request(query);
    }
    
    return{
        props: {
            landingPageProps: response,
        },
        revalidate:3600,
    }
};