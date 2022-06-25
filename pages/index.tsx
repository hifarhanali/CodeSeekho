import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react';
import Header from '../components/header';

const Home: NextPage = () => {

  return (
    <div className="">
      <Head>
        <title>Code Seekho</title>
        <link rel="icon" href="/public/assets/logo.png" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
