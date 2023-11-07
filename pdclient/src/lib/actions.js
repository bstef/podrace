
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

export async function deleteUser(formData) {

  // const deleteRacer = {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json'
  //   },
  //   body: JSON.stringify({
  //     id: {
  //       id:formData.get("value")
  //     }
  //   })
  // }




  

  console.log('hs')

    // const res = await fetch(`http://localhost:3000/api/v1/users`, deleteRacer)       

    // const data = await res.json()    

    

  }


