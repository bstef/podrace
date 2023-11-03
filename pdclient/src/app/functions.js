
"use client"
import {  useState, useEffect } from 'react'
import Link from 'next/link'
import { createUser } from "@/app/actions"


export function DisplayUsers(){
  const [firstUser, setFirstUser] = useState([])
  useEffect(() => {  

      const getData = async () => {
      const res = await fetch(`/api/user`);
      const data = await res.json() 
      setFirstUser(data.data)
      }
    setInterval(getData, 5000)
  },[]) 
  
    return (


    <div className= "columns-1" >
      <p className="text-5xl font-bold text-orange-500 ms-0" >{firstUser.name}</p>
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


export function NavBar(){
  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href='/' className="btn btn-ghost normal-case text-3xl text-orange-500">PodRace</Link>
      </div>
      <div className="navbar-end">
            <Link href="/create">
            <button className="btn btn-wide bg-orange-500 text-white">Join the Race</button>
            </Link>
      </div>
    </div>

  )
}


