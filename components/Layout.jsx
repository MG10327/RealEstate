import React from 'react'
import Head from "next/head"
import {Box} from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from './Footer'


const Layout = ({children}) => {
  console.log("Hello")

  return (
    <div>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </Box>
    </div>
  )
}

export default Layout