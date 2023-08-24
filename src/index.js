import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const tutorialData = [
    {
        name: "Amazon Web Services",
        overview: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.",
        photoName: "tutorials/aws.jpg",
    },
    {
        name: "Terraform Hashicorp",
        overview: "Terraform is an infrastructure as code tool that enables you to safely and predictably provision and manage infrastructure in any cloud.",
        photoName: "tutorials/terraform.jpg",
    },
    {
        name: "Kubernetes",
        overview: "Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.",
        photoName: "tutorials/kubernetes.jpg",
    },
    {
        name: "GitLab CI",
        overview: "GitLab is a widely used platform that enables teams to collaborate on software development projects. It provides a seamless interface for managing repositories, pipelines, and everything related to your project. ",
        photoName: "tutorials/gitlab.jpg",
    },
];

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

            <ul className="tutorials">
                {tutorialData.map((tutorial) => (
                    <Tutorial tutorialObj={tutorial} key={tutorial.name} />
                ))}
            </ul>
        </main>
    );
}

function Tutorial({ tutorialObj }) {
    return (
        <li className="tutorial">
            <img src={tutorialObj.photoName} alt={tutorialObj.name} />
            <div>
                <h3>{tutorialObj.name}</h3>
                <p>{tutorialObj.overview}.</p>
            </div>
        </li>
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