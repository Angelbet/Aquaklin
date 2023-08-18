import Head from 'next/head'
import React from 'react'

export default function Page({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="%PUBLIC%/favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    )
}
