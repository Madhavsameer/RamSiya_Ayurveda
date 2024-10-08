import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import Slider from "react-slick";
import "../styles/about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <section id="about-us">
      <Container>
        <Row>
          <Col lg="6">
            <div className="about__content">
              <h2>About Our Ayurveda & Wellness Center</h2>
              <p>
                At our Ayurveda and Wellness Center, we are dedicated to holistic healing and promoting natural health practices. 
                With centuries-old Ayurvedic traditions, our experts provide personalized treatments to balance your mind, body, and spirit.
                We believe in creating a serene and nurturing environment where healing naturally occurs, and wellbeing is restored.
              </p>

              <div className="about__counter">
                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={3000} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">3,000+ Satisfied Clients</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={5000} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">5,000+ Ayurvedic Treatments Delivered</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={2000} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">2,000+ Natural Products Used</p>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={50} duration={5} suffix="+" />
                  </span>
                  <p className="counter__title">50+ Ayurvedic Therapies Available</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" className="mb-4 mb-lg-0">
            <div className="about__img">
              <Slider {...settings}>
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.jOzEeA6koazO3xQdBJAiuQHaDo?w=325&h=172&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    alt="Ayurveda Therapy"
                    className="w-100"
                  />
                </div>
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.42EiaqxPzJDdse1v8_Al3QHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    alt="Ayurvedic Healing"
                    className="w-100"
                  />
                </div>
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.fYQKn69reGLVWDQevfYbgwHaE8?w=245&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    alt="Natural Healing"
                    className="w-100"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
