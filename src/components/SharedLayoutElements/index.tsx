'use client';

import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

export const SharedHead = () => (
  <Head>
    <meta name="theme-color" content="#bed8ff" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  </Head>
);

export const SharedToastContainer = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    draggable
    theme="colored"
  />
);
