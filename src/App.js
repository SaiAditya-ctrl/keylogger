import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';


const JPEGG_FILE="http://localhost:3000/game"
function App() {
  const downloadFile=(url)=>{
    const filename=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download",filename)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className="App">
      <div className='header'> 

        <img src="http://localhost:3000/edu.png"  />
      </div>
    
        <Navbar></Navbar>
      
     <button onClick={()=>{downloadFile(JPEGG_FILE)}}>Download PNG FILE</button>
    </div>
  );
}

export default App;
