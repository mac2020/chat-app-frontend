import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Toaster} from 'react-hot-toast'
import Joincreatechat from './component/joincreatechat'




function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        
    <Joincreatechat />
    <Toaster position="top-right" />
        </div>
    
  );
};

export default App;
