"use client"

import Link from 'next/link'

import { ListUsers} from '@/lib/functions.js'
import { Carousel } from '@/components/carousel/carousel'


export default function Home({}) {
  
return (
  <div>
    <div><Carousel/></div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 drop-shadow-xl">
      <div className='row-span-3'>  
        <div className="grid flex-grow card  bg-teal-400  text-gray-100 text-drop-shadow-lg rounded-box place-items-center mr-5"><div className='m-4'><ListUsers/></div></div>
      </div> 
      <div className='row-span-2'>  
        <div className="grid flex-grow card bg-base-300 rounded-box place-items-center mr-5">
                  <Link href="/create">
                    <button className="btn btn-wide bg-purple-400 text-white">Join the Race</button>
                  </Link>  
          </div>
      </div>       
    </div>
  </div>

    






    )
}



  // <div className='grid-cols-4'>
  //   <div><ListUsers/></div>
  //   <h2 className="text-4xl decoration-1">Currently racing</h2>




  //   <div className='my-10'><DisplayUsers/></div>
  // </div>