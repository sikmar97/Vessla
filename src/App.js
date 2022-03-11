import React from 'react';
import carReducer from "./features/car/carSlice"
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
