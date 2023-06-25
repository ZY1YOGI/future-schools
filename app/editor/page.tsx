import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
// import CodeEditor from "@/components/CodeEditor";

import "./editor.css";



export const metadata: Metadata = {
  title: 'Future Online IDE',
  description: 'محرر اكواد خاص بطلبة مدرسة المستقبل يتيح لهم العديد من اللغات',
  keywords: ['ide', 'ide online', 'code editor', 'code editor online', 'محرر اكواد', 'محرر اكواد مدرسة المستقبل']
}

export default function Editor() {

  return (
    <>
      <Navigation />
      <main className="container mx-auto text-center pt-3 dark:text-white">
        <h1 className="text-4xl">Future Online IDE</h1>
        <h2 className="text-3xl font-semibold my-32" role="banner">The Code Editor is under Development</h2>
        {/* <CodeEditor /> */}
      </main>
      <Footer />
    </>
  )
}
