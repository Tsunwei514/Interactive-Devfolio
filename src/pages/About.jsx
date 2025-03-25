import profilePic from '../assets/IMG_5025 2.JPG';
import '../assets/css/About.css';

export default function About() {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-container">
                <img className="profile-pic" src={profilePic} alt="Profile Pic" />
                <p>I am a bilingual professional with a Bachelor of Science in Information Systems from the University of Utah.
                    I have experience in data analytics, programming, systems analysis, web development, and hardware.
                    I am skilled in Python, MySQL, Java, HTML, CSS, JavaScript, and have experience with Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn.
                    I have worked as a Sr System Field Analyst at Symbotic, where I optimized system performance and presented key performance metrics.
                    I also have experience in customer service and community leadership.
                </p>
            </div>
        </div>
    );
}