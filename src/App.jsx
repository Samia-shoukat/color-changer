import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
      <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      
      <button 
      onClick={()=>setColor("red")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"red"}}>red
         </button>
      <button 
      onClick={()=>setColor("green")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"green"}}>Green
         </button>
      <button 
      onClick={()=>setColor("blue")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"blue"}}>blue
         </button>
      <button 
      onClick={()=>setColor("black")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"black"}}>black
         </button>
      <button 
      onClick={()=>setColor("purple")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"purple"}}>purple
         </button>
      <button 
      onClick={()=>setColor("orange")}
         className='outine-none px-4 py-1 rounded-full text-white shadow-lg'
         style={{backgroundColor:"orange"}}>orange
         </button>
         </div>
      </div>
    </div>
  );
}

export default App;
