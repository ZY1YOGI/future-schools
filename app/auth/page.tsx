import "./auth.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Auth',
  description: 'future schools, مدارس المستقبل, المستقبل الحديثة, مدارس المستقبل الحديثة, صفحه تسجيل الدحول'

}

export default function Auth() {

  return (
    <>
      <header>
        <svg className="waves waves-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
            <use href="#gentle-wave" x="48" y="7" fill="#fff"></use>
          </g>
        </svg>
      </header>

      <main className="main-content">
        <h1 className="title-login mb-11 whitespace-nowrap">Login</h1>
        <form className="form-login-student" method="POST" action={``}>
          <div className="input-group">
            <input type="number" className="input-field" placeholder="Code" name="code" id="code" />
            <label htmlFor="code" className="input-label">Code</label>
            <span className="input-error">{ }</span>
          </div>
          <div className="input-group">
            <input type="password" className="input-field" placeholder="Password" name="password" id="password" />
            <label htmlFor="password" className="input-label">Password</label>
            <span className="input-error">{ }</span>
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </main>


      <footer>
        <svg className="waves waves-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" ></use>
            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" ></use>
            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" ></use>
            <use href="#gentle-wave" x="48" y="7" fill="#fff" ></use>
          </g>
        </svg>
        <h1 className="rights">&copy; 2023 All rights reserved for Future Schools</h1>
      </footer>

    </>
  )
}
