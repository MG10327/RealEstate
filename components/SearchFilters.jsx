import React, { useState } from 'react'
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button} from "@chakra-ui/react"
import { useRouter} from 'next/router'
import {mdCancel} from "react-icons/md"
import Image from 'next/image'

import { filterData, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {

  const [filters, setFilters] = useState(filterData) // This sets the default array to be the filters array mapped above
  const router = useRouter()


  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };

  
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) =>
        <Box key={filter.queryName}>
          <Select
            onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            >
              {filter?.items?.map((item) =>
                <option value={item.value} key={item.value}>{item.name}</option>
              )}
            </Select>
        </Box>
      )}
    </Flex>
  )
}

export default SearchFilters