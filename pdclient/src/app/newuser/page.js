'use client'

export default function NewUser() {

    const handleSubmit = async (event) =>{
    
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
                    email: event.target.inputEmail.value,
                    password: event.target.inputPassword.value
                }
            }
        )
        }
        
        const endpoint = 'http://localhost:3000/create'
        const res = await fetch(`/api/user`);
        const data = await res.json() 
    }
  
    return (

      <>This is {firstUser.name}</>

    )
    }