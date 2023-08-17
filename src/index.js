import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="container">
            <Header />
            <Courses />
            <Footer />
        </div>
    );
}

function Header() {
    const style = {}

    return (
        <header className="header">
            <h1 style={style}>Softeam Self Service Learning</h1>
        </header>
    );
}

function Courses() {
    return (
        <main className="course">
            <h2>Our courses</h2>
            <Tutorial />
            <Tutorial />
            <Tutorial />
            <Tutorial />
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer"><h1>Happy Learning!</h1></footer>
    );
}

function Tutorial() {
    return (
        <div>
            <img src='tutorials/aws.jpg' alt="Amazon Web Services" />
            <h3>Amazon Web Services</h3>
            <p>Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.</p>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

// React before 18
// React.render(<App />);