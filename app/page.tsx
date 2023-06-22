import type { Metadata } from "next"
import HeaderHome from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'Home',
  description: 'The Home page'
}

export default function Home() {


  return (
    <>
      <HeaderHome />
      <section id="services" className="container mx-auto my-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-indigo-600 tracking-widest" data-aos="fade-up" data-aos-delay="200">SERVICES</h1>
          <p className="text-gray-700 capitalize dark:text-gray-300" data-aos="fade-down" data-aos-delay="750">We always care about our services, whether it is software, hardware, hardware or software maintenance.</p>
        </div>

        <div className="mt-8 grid grid-cols-4 gap-10 max-lg:gap-5 max-lg:gap-y-8 max-lg:grid-cols-2 max-lg:px-[3%]">

          <div className="transition-all duration-300 cursor-pointer hover:translate-x-6 dark:text-white hover:text-blue-600 dark:hover:text-red-600">
            <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-left" data-aos-delay="350">
              <h1 className="text-xl">Software</h1>
              <p className="text-gray-700 dark:text-gray-300">Software ipsum dolor sit, amet consectetur adipisicing elit. Nihil sint cumque voluptates.</p>
            </div>
          </div>

          <div className="transition-all duration-300 cursor-pointer hover:-translate-y-6 dark:text-white hover:text-blue-600 dark:hover:text-red-600">
            <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-right" data-aos-delay="680">
              <h1 className="text-xl">Hardware</h1>
              <p className="text-gray-700 dark:text-gray-300">Hardware ipsum dolor sit, amet consectetur adipisicing elit. Nihil sint cumque voluptates.</p>
            </div>
          </div>

          <div className="transition-all duration-300 cursor-pointer hover:translate-y-6 dark:text-white hover:text-blue-600 dark:hover:text-red-600">
            <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-left" data-aos-delay="680">
              <h1 className="text-xl">Rooms</h1>
              <p className="text-gray-700 dark:text-gray-300">Rooms ipsum dolor sit, amet consectetur adipisicing elit. Nihil sint cumque voluptates.</p>
            </div>
          </div>

          <div className="transition-all duration-300 cursor-pointer hover:-translate-x-6 dark:text-white hover:text-blue-600 dark:hover:text-red-600">
            <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-right" data-aos-delay="350">
              <h1 className="text-xl">Support</h1>
              <p className="text-gray-700 dark:text-gray-300">We always care about after-sales service and always support you all the time</p>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}
