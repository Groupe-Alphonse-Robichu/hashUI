import React from "react";
import './OneHash.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function OneHash() {
  const [dataReturn, setDataReturn] = React.useState(null);
  const [inputHash, setInputHash] = React.useState('');
  let navigate = useNavigate();

  function postHash() {
    if (isHash()) {
        axios
          .post('/postHash', {hash: inputHash})
          .then((response) => {
            console.log(response.data.message);
            setDataReturn(response.data.message);
            localStorage.setItem("pwd",response.data.message);
            navigate('/result') 
          })
          .catch(err => {
            console.error(err);
          });
    }
  }

  function isHash() {
    return true;
  }

  return (
    <div className="App">
      <Header/>
      <header className="App-heade">
        <div class="hash">
            <h3>Enter the HashCode</h3>
            <input placeholder="Hash" value= {inputHash} onInput={e => setInputHash(e.target.value)}></input> 
          <button type="button" class="btn btn-primary bouton" onClick={postHash}>Send</button>
        </div>
      </header>
    </div>
  );
}
 export default OneHash;