import React from 'react'
import Link from 'next/link'
import {Box, Flex, Text, Avatar} from "@chakra-ui/react"
import {FaBed, FaBath} from "react-icons/fa"
import {BsGridFill} from "react-icons/bs"
import {GoVerified} from "react-icons/go"
import millify from "millify"

import DefaultImage from "../assets/images/house.jpg"

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start">
        <Box>
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"></Image>
        </Box>
      </Flex>
    </Link>
  )
}

export default Property