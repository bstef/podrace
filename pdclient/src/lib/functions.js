
"use client"
import {  useState, useEffect } from 'react'

import { createUser, deleteUser } from "@/lib/actions"


export function RandomUsers(){
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [check, setCheck] = useState(0)
  
 async function fetchUsers(){
     const res = await fetch(`/api/random_user`)
     const payload = await res.json() 
      setData(payload.data)
      console.log(typeof data.name == "undefined", 'from fetch')
      typeof data.name == "undefined"? isLoading : setLoading(false)
       
  }
  
  useEffect(() => {  
    
     console.log(isLoading)
    const id = setInterval(() => {
                  fetchUsers()
                  setCheck(check + 1)
  console.log('from useEffect')
                }, 5000);
    return () => clearInterval(id);            
  },[check])   

  
    return (
    <div>
      <div>{isLoading? 
        
        <h1>loading</h1>

        : 

        <div className= "columns-1" >
          <h2 className="" >{data.name} from {data.pod.name} </h2>

        </div> 

      }</div>
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

export function removeUser(id){


  return (
  <form action={deleteUser} method='DELETE'>
    <div className="form-control">
      <input className='btn btn-sm' type='button' name='id' value='delete'></input>
    </div>
  </form>)

}

export function ListUsers(){
  const [data, setData] = useState([])
  
  useEffect(() => { 

      fetch(`/api/list`)
        .then((res) => res.json())
        .then((data) => {
        setData(data.data)
        })
  

   },[])

    return (

      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Pod</th>
              <th>Attack</th>
            </tr>
          </thead>
            <>{data.map((user) => (
          
              <tbody>
                {/* row 1 */}
                <tr className='m-6'>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>Container</td>
                  <td>Flare</td>
                  <td><>{removeUser(user.id)}</></td>
                  
                </tr>

              </tbody>
            ))}</>
        </table>
      </div>





                
    )
}




