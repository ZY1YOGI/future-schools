"use client";

import { FormEvent, useState } from "react";

type LangType = 'c' | 'cpp' | 'php' | 'python'



export default function CodeEditor() {

  const [lang, setLang] = useState<LangType>('python');
  const [code, setCode] = useState<string>("")


  const handleRun = () => {
    console.log(lang);
  }


  function onChangeCode(code: string) {
    console.log("code", code);
    setCode(code)
  }


  return (
    <>
      <div className="flex text-center items-center justify-center space-x-2.5">
        <h2 className="text-xl">Select Language:</h2>
        <select id="languages" className="px-4 py-1.5 rounded-lg border border-indigo-900 dark:text-black" onChange={(e: FormEvent<HTMLSelectElement>) => setLang(e.currentTarget.value as LangType)}>
          <option value="python"> Python </option>
          <option value="c"> C </option>
          <option value="cpp"> C++ </option>
          <option value="php"> PHP </option>
        </select>
      </div>
      <div className="editor w-full h-[50vh] shadow-[0_0_.3rem_#978cff9f] my-3" id="editor"></div>

      <button className="border border-primary rounded-lg px-8 py-2 hover:bg-blue-500 my-5" onClick={handleRun}> Run </button>

      <div className="output w-full h-full border border-primary"></div>
    </>
  )
}
