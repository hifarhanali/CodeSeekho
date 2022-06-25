import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react';

const Home: NextPage = () => {

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-400">
      <Head>
        <title>Code Seekho</title>
        <link rel="icon" href="/public/assets/logo.png" />
      </Head>
    </div>
  )
}

export default Home
