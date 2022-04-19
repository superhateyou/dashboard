import React from 'react';
import './App.css';
import BitrixLayout from './components/Layout/Bitrix/BitrixLayout';
import Dashboard from './components/Layout/Dashboard/Dashboard';

function App() {
  return (
    <BitrixLayout>
      <Dashboard />
    </BitrixLayout>
  );
}

export default App;
