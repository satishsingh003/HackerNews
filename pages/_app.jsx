// pages/_app.js
import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { PAGE_TITLE, PAGE_DESCRIPTION } from '../app/constants';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>{PAGE_TITLE}</title>
                    <meta charset="UTF-8" />
                    <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="description" content="PAGE_DESCRIPTION" />
                </Head>
                <Component {...pageProps} />
                
                <style jsx global>{`
                    body {
                        background-color: #fffaf2;
                        margin: 0;
                    }
                    ul {
                        padding: 0;
                    }
                `}</style>
            </>
        )
    }
}