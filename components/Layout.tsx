// Layout.tsx

import React from "react";
import Head from "next/head";
import Nav from "./Nav";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-purple-800">
      <Head>
        <title>Record Box</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
