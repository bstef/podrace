"use server"


export async function createUser(event) {
     event.preventDefault();
    const newObj ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(
            { user:
                {     
                    name:event.target.inputName.value,
                }
            }
        )
    }
    const endpoint = `http://localhost:3000/api/v1/users${newObj}`
  try {
    await fetch (endpoint)
    return { message: `Added todo ${data.user}` }
  } catch (e) {
    return { message: "Failed to create user" }
  }
}

