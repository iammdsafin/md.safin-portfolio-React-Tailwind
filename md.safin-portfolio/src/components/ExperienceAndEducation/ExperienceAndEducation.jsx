import React from 'react';
import './ExperienceAndEducation.css';

function ExperienceAndEducation() {
  return (
    <section className="experience_education py-5" id="experience_education">
      <div className="container">
        <div className="experience_education_row">
          {/* -----------------------------------------------Experience Start----------------------------------------------- */}
          <div className="col-lg-6 col-12">
            <div className="experience_container">
              <h2 className="experience-name mobile-mt-2">Experiences</h2>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <span>Learnathon 2.0</span> <span className="group-info-experience">(Since Aug)</span>
                  <h5><span>Vivasoft Limited</span></h5>
                  <h4><span >Javascript | React | Next.jS</span></h4>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <span>Software Developer (Intern)</span> <span className="group-info-experience">(Jul-Dec)</span>
                  <h5><span>WeTech Global PTE LTD</span></h5>
                  <h4><span>C# | ASP.NET | ASP. NET Core | MSSQL | MySQL | PHP | Laravel</span></h4>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <span>Cyber Security Intern</span> <span className="group-info-experience">(Jun-Aug)</span>
                  <h5><span>eTech Solution Ltd.</span></h5>
                  <h4><span>Sguil | Wireshark | PCAP</span></h4>
                </div>
              </div>
            </div>
          </div>
          {/* -----------------------------------------------Experience End----------------------------------------------- */}


          {/* -----------------------------------------------Education Start----------------------------------------------- */}
          <div className="col-lg-6 col-12">
            <div className="education_container">
              <h2 className="education-name mobile-mt-2">Educations</h2>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2023</span>
                </div>
                <div className="timeline-info">
                  <span>Computer Science Engineering</span> <span className="group-info-education">(BSc)</span>
                  <h5><span>American International University - Bangladesh</span></h5>
                  <h4><span>Software Engineering Major, CGPA 3.50 out of 4.00</span></h4>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2018</span>
                </div>
                <div className="timeline-info">
                  <span>Higher Secondary Certificate</span> <span className="group-info-education">(Science)</span>
                  <h5><span>Rajshahi University School, Rajshahi</span></h5>
                  <h4><span>GPA 4.25 out of 5.00</span></h4>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2016</span>
                </div>
                <div className="timeline-info">
                  <span>Secondary School Certificate</span> <span className="group-info-education">(Science)</span>
                  <h5><span>Rajshahi University School, Rajshahi</span></h5>
                  <h4><span>GPA 5.00 out of 5.00</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------------Education End----------------------------------------------- */}
    </section >
  );
}

export default ExperienceAndEducation;
