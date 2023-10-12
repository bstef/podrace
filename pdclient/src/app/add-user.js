"use client"

// import { useState } from "react";
import { createUser } from "@/app/actions"


// adding user: calling server function User
export function AddUser() {
// const [user, setUser] = useState ([])

    //  const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     setUser (event.target.inputName.value)

    //     createUser(user) 

     

  return (
    <container>
      <form onSubmit={createUser}>
          {/* name */}
          <div>
            <label htmlFor="name">name</label>
          <input type="text" placeholder="name" id="inputName" name="inputName"/>
          </div>
        <button type ="submit" className="btn btn-primary">submit</button>
      </form>
    </container>

    )
}