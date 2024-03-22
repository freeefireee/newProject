import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
