
import { DisplayUsers } from "@/lib/functions"

export function Carousel(){


  return(

    <div id="mainmodal">
    <div className="modalconent">
        <span className="breakingtitle">Current racers</span>
        <marquee className="marquee" behavior="scroll" direction="left">
        Aldrick from Monitors with a call + 3
        </marquee>
        <button id="readmorebutton"></button>
    </div>
    </div>

  )
}