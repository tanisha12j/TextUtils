import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name= "Tanisha";
function App() {
  return (
   <>
 
 <Navbar title ="TextUtils2" aboutText="About TextUtils "/>
 {/* <Navbar/> */}
  <div className="container my-3">
    <TextForm heading='Enter the text to analize below'/>
  </div>
  
   </>

  );
}

export default App;
