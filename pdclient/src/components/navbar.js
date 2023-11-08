import Link from 'next/link'

export function NavBar(){
  return(
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <Link href='/' className="btn btn-ghost normal-case text-3xl text-purple-500">PodRace</Link>
        </div>    
        <div className="navbar-end">
            <div className='columns-2'></div>

        </div>
    </div>

  )
}
