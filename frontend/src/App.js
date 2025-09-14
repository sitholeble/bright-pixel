import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companyResponse, portfolioResponse, packagesResponse] = await Promise.all([
          fetch('/api/company-info'),
          fetch('/api/portfolio'),
          fetch('/api/packages')
        ]);

        const companyData = await companyResponse.json();
        const portfolioData = await portfolioResponse.json();
        const packagesData = await packagesResponse.json();

        setCompanyInfo(companyData);
        setPortfolio(portfolioData.portfolio);
        setPackages(packagesData.packages);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Header companyInfo={companyInfo} />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero companyInfo={companyInfo} />
                <About companyInfo={companyInfo} />
                <Services packages={packages} />
                <Portfolio portfolio={portfolio} />
                <Contact companyInfo={companyInfo} />
              </>
            } />
          </Routes>
        </main>
        <Footer companyInfo={companyInfo} />
      </div>
    </Router>
  );
}

export default App;
