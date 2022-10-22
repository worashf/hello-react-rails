import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Greeting />}></Route>
    </Routes>
  );
};

export default App;
