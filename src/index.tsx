import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Intro from "./Intro";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Intro />}/>
            <Route path="/secrets/:api_type/:token/:company_id/:site_id/:mtr_id/:diagnosis_date" element={<App />}/>
        </Routes>
    </BrowserRouter>
);