import React from 'react'
import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  const { data} = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
	    'x-rapidapi-key': 'd847eeabebmsh8dd2ceb29fd1b78p1350ffjsnde203ac66ef2' // This is FAR from ideal but I am working out some issues with vercel to use environment variables in production instead.
    } 
  })

  return data
}