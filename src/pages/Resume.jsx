import '../assets/css/Resume.css';
import resumeFile from '../assets/Resume.pdf'

export default function Resume() {
    const resume = resumeFile;

    const skills = [
        "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express.js",
        "MongoDB", "MySQL", "PostgreSQL", "Sequelize", "RESTful APIs",
        "HTML5", "CSS3", "Tailwind CSS", "GraphQL", "Git/GitHub",
        "Agile Development", "Data Analysis", "Python (Pandas, NumPy, Matplotlib)"
    ];

    return (
        <div className="resume-container">
            <h1>Resume</h1>
            <a href={resume} download className="download-resume">
                Download Resume
            </a>
            <h2>Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}