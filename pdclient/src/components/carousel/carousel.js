
import { RandomUsers } from "@/lib/functions"
import Marquee from "react-fast-marquee";

export function Carousel(){


  return(

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Now racing:</a>
          <Marquee><RandomUsers/></Marquee>
        </div>
      </div>


 

  )
}