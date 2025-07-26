import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
