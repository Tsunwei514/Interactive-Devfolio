import '../assets/css/Portfolio.css';

export default function portfolio() {
    const projects = [
        {
            title: "Full-Stack Book Recommendation App",
            description: "A web application that allows users to search for books using a book data retrieval API, recommend books, and locate nearby libraries using a second API.",
            technologies: "HTML, CSS, JavaScript, RESTful API, Node.js, Express.js, PostgreSQL, Google Books API, Open Library API",
            image: "project1.jpg",
            link: "https://github.com/aelias-thepacer/book_recommendation_full_stack_project",
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard that displays the current weather and 5-day forecast for a city of the user's choice.",
            technologies: "HTML, CSS, JavaScript, OpenWeather API",
            image: "project2.jpg",
            link: "https://github.com/Tsunwei514/TT-Weather-Dashboard-Servers-and-APIs",
        },
        {
            title: "Employee Tracker",
            description: "A command-line application that allows the user to view and manage the departments, roles, and employees in a company.",
            technologies: "Node.js, Inquirer, MySQL",
            image: "project3.jpg",
            link: "https://github.com/Tsunwei514/Employee-Tracker",
        },
        {
            title: "Vehicle Builder",
            description: "This project is a Vehicle Builder CLI application built with TypeScript. It allows users to create and manage vehicles, including cars, motorbikes, and trucks.",
            technologies: "TypeScript, Node.js, Inquirer",
            image: "project4.jpg",
            link: "https://github.com/Tsunwei514/Vehicle-Builder",
        },
        {
            title: "Profesional README Generator",
            description: "A command-line application that generates a README file based on user input.",
            technologies: "Node.js, Inquirer",
            image: "project5.jpg",
            link: "https://github.com/Tsunwei514/TT-Professional-README-Generator",
        },
        {
            title: "Timefullness",
            description: "A web application that allows users to create and manage events and tasks with set timer and motivational quotes.",
            technologies: "HTML, CSS, JavaScript, Local Storage",
            image: "project6.jpg",
            link: "https://github.com/Tsunwei514/Timefullness",
        },
    ];

    return (
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img className="project-image" src={project.image} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p>{project.technologies}</p>
                        <a href={project.link} target="_blank" rel="noreferrer noopener">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
}