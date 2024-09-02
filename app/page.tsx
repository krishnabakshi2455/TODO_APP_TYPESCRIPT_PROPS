    "use client"
    import { useState } from "react";
    import InputFile from "./components/InputFile";
    import List from "./components/List";


    export default function Home() {
        let [ALLTODOs, setALLTODOs] = useState<string[] | [] >([
        'Lunch',
        'BreakFast',
        'Dinner',
      ])
      const ADDTODO=(todo:string|null)=>{
        // console.log('function firing',todo);
        
        // setALLTODOs(todo)
        if (todo && typeof todo === 'string') {
          setALLTODOs(prevTodos => [...prevTodos, todo]);
        }
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
