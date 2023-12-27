import React from "react";
import Header from "../components/header";
import Head from "next/head";

const HomePage = () =>{
  return(
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <Header/>
      <div id="wrapper">
      <h1>Content Here</h1>
      </div>
    </div>
  );
}
export default HomePage;