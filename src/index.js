import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import reportWebVitals from './reportWebVitals';

// Import Firebase 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Import Pages 
import Main from "./pages/Main.jsx"
import Overview from "./pages/Overview.jsx"
import Fix from "./pages/Fix.jsx"

// Import Components
import Footer from "./components/Footer.jsx"

// Firebase Config 
const firebaseConfig = {
  apiKey: "AIzaSyAocKvUt3cOGVtHpQ_5XflGVJhn36fswqU",
  authDomain: "budgetcalculator-eacc9.firebaseapp.com",
  projectId: "budgetcalculator-eacc9",
  storageBucket: "budgetcalculator-eacc9.appspot.com",
  messagingSenderId: "74183795498",
  appId: "1:74183795498:web:49ee75e5e4b3e3de49b453",
  measurementId: "G-YCY210MLLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Main/><Footer/></>}/>
        <Route path="/overview" element={<><Overview/><Footer/></>}/>
        <Route path="/fix" element={<><Fix/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
