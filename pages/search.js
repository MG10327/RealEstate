import React, {useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

const search = () => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()

  return (
    <Box>
      <Flex cursor="pointer" bg="gray.100 " borderColor="gray.200" p="2" fontWeight="black" fontSize="lg" justifyContent="center" alignItem="center" onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters></SearchFilters>}
    </Box>
  )
}

export default search