import React, { useState } from 'react';
import Input from "./Input";


function App() {
  const [amount,setAmount]= useState('');
  

  return (

    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="Uppercase text-6xl text-center font-bold 
      bg-gradient-to-br from-green-700 to-sky-400 bg-clip-text 
      text-transparent from-30%">Find cheapest BTC</h1>
      <div className="flex justify-center mt-8">
        <Input 
          className="border-yellow-400"
          value={amount} 
          onChange={e => setAmount(e.target.value)}/>
          
      </div>
    </main>
      
  )
}

export default App
