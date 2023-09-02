import React from "react";

import CommonSection from "../UI/CommonSection";
import Helmet from "../Helmet/Helmet";
import AboutSection from "../UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Why Choose Anant Car Wash and Services?
                </h2>

                <p className="section__description">
                Skilled professionals who care for your car as if it's their own.
                Tailored services to match your car's specific needs.
                Premium products and eco-friendly practices.
                Expertise in handling various vehicle types and sizes.
                Convenient online booking and flexible scheduling.
                A commitment to exceeding your expectations.
                Revitalize your car's appearance and maintain its value with Anant Car Wash and Services. Choose a package that suits you and experience the difference in every detail.

                Let us transform your car into a work of art.
                </p>

                <p className="section__description">
                  
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+91 98222 17333</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
