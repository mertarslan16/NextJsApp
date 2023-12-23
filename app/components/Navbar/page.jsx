import Link from "next/link"

const NavbarHome = () => {
  return (
    <div>
      <Link  href="/login" >Login Page</Link> 
      <Link href="/dashboard" >Dashboard</Link> 
    </div>
  )
}

export default NavbarHome