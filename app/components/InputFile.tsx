"use client"
import { error } from 'console';
import React, { Key, useState, useEffect, useRef } from 'react'

interface TODOTASKS {
  ADDTODOFUNCTION: (todo: string | null) => void;
  // This defines ADDTODOFUNCTION as a function that takes a string as a parameter(the task to add) and returns void (no return value).
  EDITTODOs: string | undefined
}
const InputFile: React.FC<TODOTASKS> = ({ ADDTODOFUNCTION, EDITTODOs  }) => {

  let [inputvalue, setinputvalue] = useState<string | null>(null)

  const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // In this case, React.ChangeEvent < HTMLInputElement > tells TypeScript that event is a change event coming from an HTMLInputElement.This allows TypeScript to understand that event.target is an HTMLInputElement, which has a value property.
    // console.log(event.target.value);
    setinputvalue(event.target.value);
    if (inputvalue !== null) {
      setERROR(false)
    }
  
  }


  // Create a ref for the input element
  const inputRef = useRef<HTMLInputElement>(null);

  let [ERROR, setERROR] = useState<boolean>(false)
  // This is a state variable that will be used to store any error messages that occur during the execution of the code.

  const inputsubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    // If you want to handle a click event on the button, you need to define a MouseEventHandler
    // console.log(inputvalue);
    event.preventDefault()
    ADDTODOFUNCTION(inputvalue)

    // setinputvalue(null)
    if (inputRef.current) {
      inputRef.current.value = ''
      setinputvalue(null)
    }
    if (inputvalue === null) {
      setERROR(true)
      console.log(ERROR);
    }


  }
  return (
    <>
      <form action="" className='flex gap-7 w-full justify-center items-center'>
        <input ref={inputRef} type="text" placeholder='ADD TODO' className='border-2 p-2 border-black w-2/3 ' onInput={handleinput}   />

        <button type="submit" onClick={inputsubmit} className="bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 transition duration-150 ease-in-out">ADD TODO</button>
      </form>
      {ERROR && <p className='text-red-700 font-serif font-bold text-lg'>Please Enter Some TODO</p>}


    </>
  )
}

export default InputFile
