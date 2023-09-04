import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Category from './components/Categories/Category';
import Topic from './components/Categories/Topic';
import Level from './components/Categories/Level';
import MarkdownDisplay from './components/Categories/MarkdownDisplay';

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Courses />} exact />
                    <Route path="/category" element={<Category />} />
                    <Route path="/:courseName" element={<Level />} />
                    <Route path="/:courseName/:level" element={<Topic />} />
                    <Route path="/:courseName/:level/:mdFileName" element={<MarkdownDisplay />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
