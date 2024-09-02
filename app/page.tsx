"use client"
import { useState } from "react";
import InputFile from "./components/InputFile";
import List from "./components/List";


export default function Home() {
  let [ALLTODOs, setALLTODOs] = useState<string[] | null>([
    'Lunch',
    'BreakFast',
    'Dinner',
  ])
  const ADDTODO=()=>{
    console.log('function firing');
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 gap-16">
        <InputFile ADDTODOFUNCTION={ADDTODO}/>
        <List TODOARRAY={ALLTODOs} />
      </div>
    </>

  );
}
