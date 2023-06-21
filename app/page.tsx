import type { Metadata } from "next"
import HeaderHome from "@/components/Header"

export const metadata: Metadata = {
  title: 'Home',
  description: 'The Home page'
}

export default function Home() {


  return (
    <>
      <HeaderHome />
    </>
  )
}
