import Navigation from "@/components/Navigation"
import type { Metadata } from "next"
import Image from "next/image"
import "./profile.css";

export const metadata: Metadata = {
  title: 'Profile Youssef',
  description: '',
  keywords: []
}

export default function Profile() {


  return (
    <>
      <Navigation />

      <main className="text-center pt-3 dark:text-white">
        <h1 className="text-3xl dark:text-white">Hi Youssef</h1>

        <div className="container flex max-md:flex-col justify-between mx-auto flex-wrap max-md:px-3">


          <div className="box">
            <div className="img">
              <Image src="/image/ide.png" width={750} height={350} alt="student statistics" />
            </div>
            <div className="text">
              <a href=""> <span>يمكنك تجربه المحرر الكود و تنفيذ الكود الخاص بك بعد مشاهدة الكورسات</span></a>
              <p>نفذ الكود الخاص بك من خلال محرر الاكواد الاون لاين وتجربه فريده من خلال المحرر</p>
              <a href="/editor" className="btn dark:text-white">تجربة</a>
            </div>
          </div>


          <div className="box">
            <div className="img">
              <Image src="/image/student_statistics.png" width={750} height={350} alt="student statistics" />
            </div>
            <div className="text">
              <a href=""> <span>اكتشف درجاتك لهاذا الشهر</span></a>
              <p>اعرف درجاتك في الامتحانات الشهريه عن طريق الكود الخاص بك</p>
              <a href="#" className="btn dark:text-white">أكتشف</a>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <Image src="/image/student_grades.jpg" width={750} height={350} alt="student statistics" />
            </div>
            <div className="text">
              <a href=""><span>اعرف سلوكك مع المعلم</span></a>
              <p>اكتشف تقيم المعلم الخاص بك و حاول التقدم بنفسك من خلال النصائح التي تقدم لك</p>
              <a href="#" className="btn dark:text-white">أكتشف</a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
