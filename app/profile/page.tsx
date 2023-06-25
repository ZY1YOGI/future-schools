import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import "./profile.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Profile Youssef',
  description: '',
  keywords: []
}

export default function Profile() {


  return (
    <>
      <Navigation />

      <main className="container mx-auto text-center pt-3 dark:text-white">

        <div className="h-[50vh] w-full">

        </div>

        <h1 className="text-3xl" data-aos="fade-up" data-aos-delay="350">Hi Youssef</h1>

        <div className="flex max-md:flex-col space-x-12 max-md:space-x-0 max-md:space-y-10 justify-between mt-12 max-md:px-3">

          <div className="box">
            <Image src="/image/ide.png" width={500} height={500} alt="student statistics" />
            <div className="text">
              <h2 data-aos="fade-up">يمكنك تنفيذ الكود الخاص بك بعد مشاهدة الكورسات</h2>
              <p>نفذ الكود الخاص بك من خلال محرر الاكواد الاون لاين وتجربه فريده من خلال المحرر</p>
              <Link href="/editor" className="btn">تجربة</Link>
            </div>
          </div>


          <div className="box">
            <Image src="/image/student_statistics.png" width={500} height={500} alt="student statistics" />
            <div className="text">
              <h2 data-aos="fade-up">أكتشف درجاتك لهاذا الشهر</h2>
              <p>أكتشف درجاتك في الامتحانات الشهريه عن طريق الكود الخاص بك</p>
              <Link href="#" className="btn">أكتشف</Link>
            </div>
          </div>

          <div className="box">
            <Image src="/image/student_statistics.png" width={500} height={500} alt="student statistics" />
            <div className="text">
              <h2 data-aos="fade-up">اعرف سلوكك مع المعلم</h2>
              <p>اكتشف تقيم المعلم الخاص بك و حاول التقدم بنفسك من خلال النصائح التي تقدم لك</p>
              <Link href="#" className="btn">أكتشف</Link>
            </div>
          </div>

        </div>

      </main>
    </>
  )
}
