import React from 'react';
import './App.scss';
import Header from './components/GKHeader'
import GKHome from './containers/GKHome/index'

const App: React.FC = () => {
  return (
    <div>
      <Header title="Pokédex" />
      <div className="gk-app">
        <GKHome />
      </div>
    </div>
  )
}

export default App;
