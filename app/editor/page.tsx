import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import "./editor.css";

export const metadata: Metadata = {
  title: 'Editor',
  description: '',
  keywords: []
}

export default function Profile() {


  return (
    <>
      <Navigation />

      <main className="container mx-auto text-center pt-3 dark:text-white">

      </main>
    </>
  )
}
