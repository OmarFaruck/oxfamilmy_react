 
import './App.css';  
import Header from './Componant/Header/Header';
// import Maintext from './Componant/Maintext/Maintext';
import Headertext from './Componant/Headertext/Headertext'
import Bannerimg from './Componant/Bannerimg/Bannerimg.jsx'
import ReactIcon from './Componant/ReactIcon/ReactIcon.jsx'
import Btntext1 from './Componant/Btntext/Btntext_1'; 
import Btntext2 from './Componant/Btntext/Btntext_2nd'; 
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App"> 
      <Header/>

      {/* <Maintext/>  note = different page use this componant*/ }  

      <Headertext/>

      <ReactIcon/>
      
      <Btntext1/>

    
      <Routes> 
      <Route path='/about' element={<Btntext2/>}/>
          
      </Routes>
     

      <Bannerimg/> 

    </div>
  );
}

export default App;
