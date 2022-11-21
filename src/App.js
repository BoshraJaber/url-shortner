import React, { Suspense } from 'react';
import './App.css';


const Header = React.lazy(() => import('./components/Header/Navbar'));
const Main = React.lazy(() => import('./components/Main/Main'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));




function App() {
  return (
    <section className="App">
      <Header />
      <Main />
      <Suspense fallback={<section>Loading...</section>}>
        <Footer />
      </Suspense >
    </section>
  );
}

export default App;
