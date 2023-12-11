import './globals.css'
import {NavBar} from '@/components/navbar'
import { Carousel } from '@/components/carousel/carousel'

export const metadata = {
  title: 'PodRace',
  description: 'From NYC with love',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="fixed top-0 left-0 right-0"><NavBar/></div>
        <div className="fixed top-20 left-0 right-0"><Carousel/></div>
        <div className="hero min-h-screen bg-base-200 ">
          
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
