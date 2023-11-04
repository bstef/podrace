

import { NextResponse } from 'next/server'


export async function GET (){

   try {

    const randomId = Math.floor(Math.random() * (5 - 1) + 1) / 1;

    const res = await fetch(`http://localhost:3000/api/v1/users/${randomId}`)       

    const data = await res.json()

    console.log(data)

    
    return NextResponse.json({ data })

   }catch(error){console.log(error)}
}


