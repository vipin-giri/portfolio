import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Full Stack Developer with  cybersecurity focus, building fast, scalable, and secure web applications.
          I test for vulnerabilities like XSS, IDOR, and logic flaws, and have reported 200+ XSS issues across public and government platforms, including rate limit and CORS misconfigurations.
          I focus on building systems that are both functional and secure from day one.
        </p>
      </div>
    </div>
  );
};

export default About;
