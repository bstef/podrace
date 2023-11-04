"use client"

import { DisplayUsers} from '@/lib/functions.js'


export default function Home({}) {
  
return (

  <div>
    <h2 className="text-4xl decoration-1">Currently racing</h2>
    <div className='my-10'><DisplayUsers/></div>
  </div>

    )
}



