
"use server"
import { redirect } from 'next/navigation'

export async function createUser(formData) {

  const newRacer = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      user: {
        name:formData.get("name")
      }
    })
  }

    const res = await fetch(`http://localhost:3000/api/v1/users`,newRacer)       

    const data = await res.json()    

    redirect("/")

  }

