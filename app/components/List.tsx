"use client"
import React from 'react'



interface ListProps {
  TODOARRAY: string[] | null;
  // DELETETODO:string
  DELETETODO: (todo: string, index: number) => void // Change from string to function
  EDITTODO: (todo: string, index: number) => void
}
const List: React.FC<ListProps> = ({ TODOARRAY, DELETETODO, EDITTODO }) => {
  if (!TODOARRAY || TODOARRAY.length === 0) {
    return <p className='border-2 m-5 border-black p-2'>No todos available</p>;
  }
  return (
    <>
      <div className='flex flex-col w-full'>
        {
          TODOARRAY.map((todo, index) => {
            return (
              <div className='flex justify-between items-center border-2 m-3 border-black p-2' key={index}>
                <p key={index}>{todo}</p>
                <div className='flex gap-14'>
                  <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    onClick={() => DELETETODO(todo, index)}
                  >Delete</button>
                  <button type='button'
                   className="bg-cyan-600 text-white font-bold py-2 px-4 rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    onClick={() => EDITTODO(todo, index)}>EDIT</button>
                </div>
              </div>
            )
          })
        }

      </div>

    </>
  )
}

export default List
