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
            <Tutorial name='Amazon Web Services' overview='Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.'
                photoName='tutorials/aws.jpg' />
            <Tutorial name='Terraform Hashicorp' overview='Terraform is an infrastructure as code tool that enables you to safely and predictably provision and manage infrastructure in any cloud.'
                photoName='tutorials/terraform.jpg' />
        </main>
    );
}

function Tutorial(props) {
    return (
        <div className="tutorial">
            <img src={props.photoName} alt={props.name} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.overview}.</p>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer"><h1>Happy Learning!</h1></footer>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);

// React before 18
// React.render(<App />);