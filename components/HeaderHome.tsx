import Image from 'next/image';
import Negative from './Navigation';

export default function HeaderHome() {

  return (
    <header>
      <Negative />

      <section className='container mx-auto flex max-md:flex-col md:items-center mt-8'>
        <section className="md:w-1/2 max-md:text-center flex-1">
          <h1 className="text-3xl mb-5 text-[#070439] dark:text-white max-md:px-1" data-aos="fade-down" data-aos-delay="150">Future Schools We care about all the details of our students</h1>
          <p className="font-semibold mb-8 text-[#444444] dark:text-gray-300 max-md:px-2" data-aos="fade-up" data-aos-delay="350">
            Modern Future Schools are apprentice schools that offer different departments for students, the Programming Department, the Computer Department, and the Chemical Laboratory Department
          </p>

          <a href="#" className="py-5 px-10 bg-[#372cfa] text-white font-semibold cursor-pointer border-none outline-none transition-all rounded-2xl hover:bg-[#070439]">Get Started</a>
        </section>

        <section className="max-md:-order-1 flex-1">
          <Image src='/hero.svg' width={1000} height={1000} priority={true} alt='student future schools egypt' />
        </section>
      </section>
    </header>
  )
}
