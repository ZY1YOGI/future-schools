import type { Metadata } from "next"
import HeaderHome from "@/components/header-home"

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
