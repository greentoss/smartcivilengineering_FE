import React from 'react';
// import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '@/environment/routes/router';
import { Banner } from '@/components/molecules';
import { Header, Footer } from '@/components/organisms';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Banner />
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
