import React from 'react'

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto my-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2 dark:text-white decoration-slice underline underline-offset-[5px] decoration-indigo-600 tracking-widest" data-aos="fade-up" data-aos-delay="200">SERVICES</h1>
        <p className="text-gray-700 capitalize dark:text-gray-300 px-1" data-aos="fade-down" data-aos-delay="750">Services provided by the Schools of the Future platform: support for students, workshops, chat rooms, and Lectures etc..</p>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-10 max-lg:gap-5 max-lg:gap-y-8 max-lg:grid-cols-2 max-lg:px-[3%]">

        <div className="transition-all duration-300 cursor-pointer hover:translate-x-6 dark:text-white hover:text-primary">
          <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-left" data-aos-delay="350">
            <h1 className="text-xl">Support</h1>
            <p className="text-gray-700 dark:text-gray-300">We support students through activities, student containment, and learning about the things they love</p>
          </div>
        </div>

        <div className="transition-all duration-300 cursor-pointer hover:-translate-y-6 dark:text-white hover:text-primary">
          <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-right" data-aos-delay="680">
            <h1 className="text-xl">Workshop</h1>
            <p className="text-gray-700 dark:text-gray-300">Workshops for students in all our departments, and we provide them with permanent support</p>
          </div>
        </div>

        <div className="transition-all duration-300 cursor-pointer hover:translate-y-6 dark:text-white hover:text-primary">
          <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-left" data-aos-delay="680">
            <h1 className="text-xl">Rooms</h1>
            <p className="text-gray-700 dark:text-gray-300">Chat rooms Students can talk to teachers and can help each other through chat rooms</p>
          </div>
        </div>

        <div className="transition-all duration-300 cursor-pointer hover:-translate-x-6 dark:text-white hover:text-primary">
          <div className="h-full p-5 border border-blue-600 shadow-md bg-gray-50 dark:bg-gray-800 shadow-gray-500 rounded-xl" data-aos="fade-right" data-aos-delay="350">
            <h1 className="text-xl">Lectures</h1>
            <p className="text-gray-700 dark:text-gray-300">Lectures given by teachers in all departments can be accessed and shared with your classmates</p>
          </div>
        </div>

      </div>
    </section>
  )
}
