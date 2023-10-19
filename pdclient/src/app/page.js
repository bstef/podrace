"use client"

import {  useState, useEffect } from 'react'
import { AddUser } from '@/app/add-user.js'


export default function Home() {
    const [firstUser, setFirstUser] = useState([])
    const [play, setPlay] = useState([true])
    const [show, setShow] = useState([false])
    
    
    function showForm () {
      if (show) {{setShow(true)}}
      else {{setShow(false)}}
    }
    
    
    

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
            <div className="hero min-h-screen bg-base-200 ">

              <div className="hero-content1 text-center">
                <div className="max-w-md">
                  {/* name display */}
                  <div className= "columns-2 gap-y-0" >
                    <p className="text-4xl font-bold">Hello</p>
                    <p className="text-3xl font-bold text-orange-500 ms-0" >{firstUser.name}</p>
                  </div>
                  {/* form button*/}
                  
                  <details onClick={showForm} className="collapse  bg-orange-500 my-6">
                    <summary className="collapse-title text-xl font-medium bg-orange-500 text-gray-50 ms-0">Join the race!</summary>
                    <div className="collapse-content"> 
                    {/* form */}

                      <><AddUser /></>
                    </div>


                  </details>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </main>
    )
    }



                  // <h2 className="py-6"></h2>
                  // <button onclick={displayForm}className="btn btn-primary">Join the race!</button>
                  // {/* form */}
                  // <div>
                  //   <div>
                  //   {show?
                  //   // show 
                  //  <div>

                  //  </div> 
                  //  :
                  //  <div>
                  //  </div> 
                  //   }
                  //   </div>
                  // </div>