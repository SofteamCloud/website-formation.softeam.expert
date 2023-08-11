import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <Header />
            <Courses />
            <Footer />
        </div>
    );
}

function Header() {
    return <h1>Softeam Self Service Learning</h1>
}

function Courses() {
    return (
        <div>
            <h2>Our courses</h2>
            <Tutorial />
            <Tutorial />
            <Tutorial />
            <Tutorial />
        </div>
    );
}

function Footer() {
    return React.createElement('footer', null, "Happy Learning!!")
}

function Tutorial() {
    return (
        <div>
            <img src='tutorials/aws.jpg' alt="Amazon Web Services" />
            <h2>Amazon Web Services</h2>
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