import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


const App: React.FC = () => {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />

      <div className="container my-3">

        <TextForm heading='Enter the text to analyze below' />
        
      </div>
    </>
  );
}

export default App;
