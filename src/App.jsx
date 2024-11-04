import { useState } from 'react';
import Hero from "./components/Hero";
import HistContext from "./components/HistContext";
import Chatbot from "./components/Chatbot";
import KnowMore from "./components/KnowMore";
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [sharedVariable, setSharedVariable] = useState({});
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="overflow-x-hidden">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <>
          <Hero sharedVariable={sharedVariable} setSharedVariable={setSharedVariable} />
          <HistContext sharedVariable={sharedVariable} />
          <Chatbot />
          <KnowMore />
        </>
      )}
    </div>
  );
}
