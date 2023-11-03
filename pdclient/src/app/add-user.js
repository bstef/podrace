
"use client"

// import { useState } from "react";
import { createUser } from "@/app/actions"
// import { useForm, SubmitHandler } from "react-hook-form"

  const options = [
    {value: '', text: 'pod'},
    {value: 'agent', text: 'Agent'},
    {value: 'apm', text: 'APM'},
  ];

// adding user: calling server function User
export function AddUser() {
  // const {register, handleSubmit} = useForm

  return (


    <form action={createUser} >
      <div className="join ">
            <div>
              <input id='name-id' type="text" name='name' className="input input-bordered join-item" placeholder="Name"/>
            </div>
              <select className="select select-bordered join-item">
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}                
              </select>
              <button type="submit" value="Submit" className="btn join-item bg-color-gray-200">Race</button>      
        </div>
    </form>


    )
}

