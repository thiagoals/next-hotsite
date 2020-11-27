import Head from 'next/head';
import React from 'react';

export default function Header(){
    return (
        <Head><title>{process.env.SiteName}</title></Head>
    )
}