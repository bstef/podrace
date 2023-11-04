import Link from 'next/link'

export function NavBar(){
  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href='/' className="btn btn-ghost normal-case text-3xl text-orange-500">PodRace</Link>
      </div>
      <div className="navbar-end">
            <Link href="/create">
            <button className="btn btn-wide bg-orange-500 text-white">Join the Race</button>
            </Link>
      </div>
    </div>

  )
}
