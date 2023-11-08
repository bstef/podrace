
import { RandomUsers } from "@/lib/functions"

export function Carousel(){


  return(

    <div id="mainmodal">
    <div className="modalconent">
        <span className="text-3xl font-bold text-purple-700 ms-0">Racers on the track</span>
        <marquee className="card-title  w-600 bg-base-100 shadow-xl" behavior="scroll" direction="left">
        <RandomUsers/>
        </marquee>
        <button id="readmorebutton"></button>
    </div>
    </div>

  )
}