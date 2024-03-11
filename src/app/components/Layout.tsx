import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Mi Portfolio' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;