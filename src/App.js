import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';

function App() {
    return (
        <div className="container">
            <Header />
            <Courses />
            <Footer />
        </div>
    );
}

export default App;
