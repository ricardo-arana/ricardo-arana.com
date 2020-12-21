import Head from 'next/head';
import { Navbar } from './navbar';
import { useEffect } from'react'
export const Layout = (props)  => {
    useEffect(() => {
        require('../client/links');
    }
    , []);

    return (
        <>
        <Head>
            
            <title>Ricardo Gabriel Arana Reyes Guerrero</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="styles.css" rel="stylesheet" />
        <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossOrigin="anonymous"></script>
        </Head>
        <div id="page-top">
            <Navbar></Navbar>
            {props.children}
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
        </>
    );
}