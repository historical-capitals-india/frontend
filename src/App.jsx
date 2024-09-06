import React, { useState } from 'react';
import Hero from "./components/Hero";
import HistContext from "./components/HistContext";
import Chatbot from "./components/Chatbot"
import KnowMore from "./components/KnowMore"

export default function App() {
  const [sharedVariable, setSharedVariable] = useState({});
  return (
    <div className="overflow-x-hidden">
      <Hero sharedVariable={sharedVariable} setSharedVariable={setSharedVariable}/>
      <HistContext sharedVariable={sharedVariable}/>
      <Chatbot />
      <KnowMore />
    </div>
  )
}