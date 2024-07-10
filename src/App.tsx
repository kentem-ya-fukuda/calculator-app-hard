import React from 'react';
import './styles.css';
import Calculator from './components/calculator';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>簡易計算機</h1>
      <Calculator />
    </div>
  );
};

export default App;
