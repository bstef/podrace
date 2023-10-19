"use client"

import {  useState, useEffect } from 'react'
import { AddUser } from '@/app/add-user.js'
import Container from 'postcss/lib/container'


export default function Home() {
    const [firstUser, setFirstUser] = useState([])
    const [play, setPlay] = useState([true])

    
    function displayForm () {setPlay(true)};
    const hide = () => {setPlay(false)};

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
      <main>

        <div className="container"  data-theme="light"> 
          <div className="element">
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <div className= "columns-2" >
                    <h1 className="text-5xl font-bold">Hello</h1>
                    <h1 className="text-5xl font-bold text-orange-500 ms-0" >{firstUser.name}</h1>
                  </div>

                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <><AddUser /></>
        </div>
      
      </main>
    )
    }