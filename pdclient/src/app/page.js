"use client"


import {  useState, useEffect } from 'react'

export default function Home() {
    const [firstUser, setFirstUser] = useState([])
    const [play, setPlay] = useState([true])

    
    const start = () => {setPlay(true)};
    // const stop = () => {setPlay(false)};

  useEffect(() => {  
    console.log(play)
    if (play) {
      const getData = async () => {


      const res = await fetch(`/api/user`);
      const data = await res.json() 
      setFirstUser(data.data)
      // console.log(data.data)
      }
      // getData()
    setInterval(getData, 5000)
  } else {[]}

  },[]) 
  
    return (

      <>This is {firstUser.name}</>

    )
    }