
"use server"

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

    NextResponse.json({ data })

    

  }

  export async function fetchUsers (){

   try {

    const randomId = Math.floor(Math.random() * (5 - 1) + 1) / 1;

    const res = await fetch(`http://localhost:3000/api/v1/users/${randomId}`)       

    const data = await res.json()

    
    NextResponse.json({ data })

   }catch(error){console.log(error)}

  }
