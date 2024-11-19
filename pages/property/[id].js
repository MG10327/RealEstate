import React from 'react'
import {Box, Flex, Spacer, Text, Avatar} from "@chakra-ui/react"
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import ImageScrollbar from "../../components/ImageScrollbar"

import { baseUrl, fetchApi } from '../utils/fetchApi';

const PropertyDetails = ({PropertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, type, purpose, furnishingStatus, amenities, photos}}) => (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
    </Box>
  )

export default PropertyDetails

export async function getServerSideProps({params: {id}}) {
  const data = await fetchApi(`${baseUrl}/properties/details/list?locationExternalIDs=${id}`)

  return {
    props: {
      PropertyDetails: data
    }
  }
}