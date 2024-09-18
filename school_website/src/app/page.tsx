import Link from "next/link"

const Homepage = () => {
  return (
    <div className='flex gap-4 flex-col items-center text-blue-400 text-xl'>
      <Link href={'/admin'}>Go to Admins page</Link>
      <Link href={'/student'}>Go to Students page</Link>
      <Link href={'/teacher'}>Go to Teachers page</Link>
      <Link href={'/parents'}>Go to Parents page</Link>
      <Link href={'/sign-up'}>Go to SignUp page</Link>
      <Link href={'/sign-in'}>Go to SignIn page</Link>
    </div>
  )
}

export default Homepage