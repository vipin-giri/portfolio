import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed 6+ freelance projects including major project Khwaish. 
              Delivered end-to-end web solutions using modern frameworks and 
              best practices for clients across various industries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Analyst</h4>
                <h5>Sysinet</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started cybersecurity career with comprehensive vulnerability testing 
              and security assessments. Submitted multiple security reports and 
              completed penetration testing for various applications, identifying 
              critical vulnerabilities and helping secure systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
