import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Title } from './components/Title/Title';
//import { About } from './components/About/About';

import './main.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Title isLoading={isLoading} />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/general" element={<div>General Content</div>} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
