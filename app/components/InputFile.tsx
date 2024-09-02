"use client"
import React, { Key, useState, useEffect } from 'react'

interface TODOTASKS {
  ADDTODOFUNCTION: (task: string) => void;
  // This defines ADDTODOFUNCTION as a function that takes a string as a parameter(the task to add) and returns void (no return value).
}
const InputFile: React.FC<TODOTASKS> = ({ ADDTODOFUNCTION }) => {

  const [inputvalue, setinputvalue] = useState<string | null>(null)

  const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    // In this case, React.ChangeEvent < HTMLInputElement > tells TypeScript that event is a change event coming from an HTMLInputElement.This allows TypeScript to understand that event.target is an HTMLInputElement, which has a value property.
    // console.log(event.target.value);
    setinputvalue(event.target.value);
  }
  const inputsubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    // If you want to handle a click event on the button, you need to define a MouseEventHandler
    console.log(inputvalue);
    event.preventDefault()
  }
  return (
    <>
      <form action="" className='flex gap-7 w-full justify-center items-center'>
        <input type="text" placeholder='ADD TODO' className='border-2 p-2 border-black w-2/3 ' onInput={handleinput} />
        <button type="submit" onClick={inputsubmit} className="bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-opacity-50 transition duration-150 ease-in-out">ADD TODO</button>
      </form>


    </>
  )
}

export default InputFile
