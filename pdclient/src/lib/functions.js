
"use client"
import {  useState, useEffect } from 'react'

import { createUser } from "@/lib/actions"


export function DisplayUsers(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [check, setCheck] = useState(0)
  
  function fetchUsers(){
      fetch(`/api/random_user`)
      .then((res) => res.json())
      .then((data) => {
      setData(data.data)
      setLoading(false)
       })
  }
  
  useEffect(() => {  
    
     
    const id = setInterval(() => {
                  fetchUsers()
                  setCheck(check + 1)

                }, 4000);
    return () => clearInterval(id);            
  },[check])   

  
    return (


    <div className= "columns-1" >
      <p className="text-5xl font-bold text-orange-500 ms-0" >{data.name}</p>
    </div>
                  

    )
}

export function AddUser() {

  return (

  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form action={createUser} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input id='name-id' type="text" name='name' className="input input-bordered join-item" placeholder="Name"/>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Pod</span>
        </label>
        <input type="text" placeholder="pod" id="pod-id" name="pod" className="input input-bordered" required />
        <label className="label">
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary bg-orange-500 text-white">Create</button>
      </div>
    </form>
  </div>

    )
}




