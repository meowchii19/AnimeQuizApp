import React, { useState, useEffect } from 'react'



export default function Question() {

  useEffect(() => {
    const URL = `https://opentdb.com/api.php?amount=1`
    const response = fetch(URL)
    const data = response.json()
    console.log(data)
  }, [])
  
}
