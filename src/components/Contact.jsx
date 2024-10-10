import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact-section">

        


      <div className="formc">
          <iframe
            title="Google Forms"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfbICgjyAPZQdmeXKzurdnl1zZM-vZ5sgqaCz-4wQkTCHQdvw/viewform?embedded=true"
            width="100%"
            height="2300vh"
            style={{ border: 0 }}
            allowFullScreen="yes"
            loading="lazy"
          ></iframe>
        </div>
        

        {/* Corrected Google Maps iFrame */}
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30215.259424883334!2d84.13511679999999!3d18.8022784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf98111e52f3b%3A0x316b288d3abda74e!2sCenturion%20University%20of%20Technology%20and%20Management%20(CUTM)!5e0!3m2!1sen!2sin!4v1728425910014!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="floating-buttons">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210" // Replace with your WhatsApp number
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://th.bing.com/th/id/OIP.hbr47SG8Nl1CUsQBVLhz_AHaHa?rs=1&pid=ImgDetMain" alt="WhatsApp" />
          </a>

          {/* Call Button */}
          <a href="tel:+919876543210" className="call-btn">
            <img src="https://th.bing.com/th/id/OIP.hE6M1KsmyCKGI4Rx8OWpAQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.4&pid=1.7" alt="Call" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
