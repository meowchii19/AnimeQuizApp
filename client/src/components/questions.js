import React, { useState, useEffect } from 'react'

export const Question = async () => {

  const URL = "http://localhost:4242"
      const getData = await fetch(`${URL}/api/read/609f9898afaac56311b2c252`)
      const data = await getData.json()
      return data
  } 

export default Question
