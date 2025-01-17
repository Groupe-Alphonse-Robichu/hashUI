import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Statistiques from './Statistiques';
import OneHash from './OneHash';
import Result from './Result';
import Results from './Results';
import Loading from './Loading'
import Error from './Error';
import SeveralHash from './SeveralHash';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/statistiques" element={<Statistiques />} />
      <Route path="/onehash" element={<OneHash/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/results" element={<Results/>}/>
      <Route path="/severalhash" element={<SeveralHash/>}/>
      <Route path="/loading" element={<Loading/>}/>
      <Route path="/error" element={<Error/>}/>

    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
