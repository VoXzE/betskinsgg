import React from 'react';
import Navigation from './components/Navigation';
import './assets/css/App.css';
import 'react-flags-select/css/react-flags-select.css';
import 'rodal/lib/rodal.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
