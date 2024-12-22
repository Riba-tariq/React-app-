
import React,{useState}from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/alert';
 //import Home from './components/home';
 import About from './components/About';
 import {Routes,Route } from 'react-router-dom';
function App() {
const [mode,setMode ]=useState('light');
const [alert,setAlert]=useState(null);
const showAlert = (message,type) =>{
 setAlert({
  msg:message,
  type:type,
 })
 setTimeout( () =>{
     setAlert(null)
 },1500);
}
 const toggleMode= ()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
//document.title='App';
  }else{
  setMode ('light')
      document.body.style.backgroundColor='white'
      //document.title='App';
     
}
 }
 return (
<>
    <Navbar title="App" mode={mode} toggleMode={toggleMode} />
    < Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>} >
      </Route>
       <Route exact path="/" element={<Textform showAlert={showAlert} heading="word counter, character counter " mode={mode}/>} >
     </Route>
    </Routes> 
  </div>
  </>
    );
  }  
  export default App;
