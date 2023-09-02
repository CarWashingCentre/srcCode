import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/about-section.css";
import aboutImg from "../assets/all-images/cars-img/bmw-wash.png";
import 'remixicon/fonts/remixicon.css'
const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Anant Car Wash and Services</h2>
              <p className="section__description">
                Your premier destination for top-notch car care and maintenance. With a passion for automobiles and a commitment to excellence, we take pride in providing unparalleled services that keep your vehicles shining and performing at their best.
                At Anant Car Wash and Services, we understand that your vehicle is more than just a means of transportation; it's an investment, a reflection of your personality, and a source of pride. With this in mind, our dedicated team of skilled professionals employs the latest techniques, premium products, and state-of-the-art equipment to ensure your vehicle receives the care it deserves.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Quality: We believe in delivering nothing short of perfection. 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Customer Satisfaction: Your satisfaction is our driving force.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Expertise: With years of experience in the industry,your vehicle is in capable hands.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Environmentally Conscious: We are committed to reducing our ecological footprint.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
