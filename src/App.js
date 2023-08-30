import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="container">
            <Header />
            <Courses />
            <Footer />
        </div>
    );
}

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

function Courses() {
    return (
        <main className="course">
            <h2>Our courses</h2>

            <p>At Softeam, we believe in the relentless pursuit of knowledge. Recognizing the rapidly evolving tech landscape, we introduced the Softeam Self Learning Service - a dedicated platform for our team members. This service offers a comprehensive range of courses and tutorials tailored for those eager to stay at the forefront of technology.</p>

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

export default App;