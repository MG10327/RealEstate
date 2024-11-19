import React from 'react'
import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
  console.log("Environment Variable Key:", process.env.NEXT_PUBLIC_RAPID_API_KEY);

  const { data} = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
	    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || ""
    }
  })

  return data
}