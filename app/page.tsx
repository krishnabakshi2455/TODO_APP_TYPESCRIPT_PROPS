"use client"
import { useState } from "react";
import InputFile from "./components/InputFile";
import List from "./components/List";


export default function Home() {
  let [ALLTODOs, setALLTODOs] = useState<string[] | []>([
    'Lunch',
    'BreakFast',
    'Dinner',
  ])
  const ADDTODO = (todo: string | null) => {
    // console.log('function firing',todo);

    // setALLTODOs(todo)
    if (todo && typeof todo === 'string') {
      setALLTODOs(prevTodos => [...prevTodos, todo]);
    }
  }
  const DELETETODO = (todo: string, index: number) => {
    // console.log('this is todo', todo, 'this is index', index);
    const updatedtodo = ALLTODOs.filter(ALLTODOs => ALLTODOs !== todo);
    setALLTODOs(updatedtodo);

  }

  const [EDITTODOs, setEDITTODOs] = useState<string>()

  const EDITTODO = (todo:string,index:number)=>{
    setEDITTODOs(todo)
    console.log('this is editindex', index);
    const updatedtodo = ALLTODOs.filter(ALLTODOs => ALLTODOs !== todo);
    setALLTODOs(updatedtodo);
    
  }
  // console.log('this is edittodo', EDITTODOs);
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 gap-16">
        <InputFile ADDTODOFUNCTION={ADDTODO} EDITTODOs={EDITTODOs}/>
        <List TODOARRAY={ALLTODOs} DELETETODO={DELETETODO} EDITTODO={EDITTODO} />
      </div>
    </>

  );
}
