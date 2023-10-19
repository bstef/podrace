"use client"

// import { useState } from "react";
import { createUser } from "@/app/actions"


// adding user: calling server function User
export function AddUser() {

  return (
    <container>
    <form  method="POST">
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Create Account</button>
    </form>
    </container>

    )
}

// action={createUser}