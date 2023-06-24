import type { Metadata } from "next"
import HeaderHome from "@/components/Header"
import Footer from "@/components/Footer"
import ServicesSection from "@/components/sections/ServicesSection"

export const metadata: Metadata = {
  title: 'Future Schools Home',
  description: 'مدارس المستقبل الحديثه هيا مدارس تلمذه صناعية و مرخصه من وزارة التربيه و التعليم',
  keywords: ['future schools', 'الصفحه الرائيسه لمدراس المستقبل', 'مدارس المستقبل الحديثة', 'مدرسة المستقبل', 'مدارس التلمذه الصناعية', 'مدرسة', 'تقديم الثانوية']
}

export default function Home() {


  return (
    <>
      <HeaderHome />
      <ServicesSection />
      <Footer />s
    </>
  )
}
