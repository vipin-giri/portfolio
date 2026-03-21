import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              VIPIN
              <br />
              <span>GIRI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Full Stack Developer | Cybersecurity Analyst</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Building Secure Applications </div>
              <div className="landing-h2-2">Finding Real Vulnerabilities</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Finding Real Vulnerabilities</div>
              <div className="landing-h2-info-1">Building Secure Applications </div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
