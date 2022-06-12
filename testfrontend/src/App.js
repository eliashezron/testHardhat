import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const {amount, setAmount} = useState()
  const deposit = async(e) =>{
    e.preventDefault()
    
  }
  return (
    <div className="App">
      <input placeholder='enter amount' onChange={(e)=>setAmount(e.target.value)}>amount</input>
      <button onClick={()=>deposit()}>deposit</button>
    </div>
  );
}

export default App;
