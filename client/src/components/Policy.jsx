import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and Conditions</h1>
        <Row>
          <Col md={10}>
            <h6>Terms and Conditions</h6>
            <p>
              Welcome to Pizza Hut! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not agree to all of the terms and conditions stated on this page.
            </p>

            <h6>Intellectual Property</h6>
            <p>
              All intellectual property rights, including copyrights, trademarks, and logos, displayed on this website are the property of Pizza Hut and its licensors. You must not use, reproduce, modify, or distribute any of the content without our prior written consent.
            </p>

            <h6>Ordering and Delivery</h6>
            <p>
              When placing an order through our website, you agree to provide accurate and complete information. We reserve the right to refuse or cancel your order if we suspect fraudulent activity or for any other reason at our discretion. Delivery times are estimates and may vary depending on various factors. We are not liable for any delays or issues caused by third-party delivery services.
            </p>

            <h6>Refunds and Returns</h6>
            <p>
              We strive to provide the best quality products and services. If you are not satisfied with your order, please contact our customer support within 24 hours of receiving your order. Refunds or returns will be considered on a case-by-case basis.
            </p>

            <h6>Disclaimer</h6>
            <p>
              The information contained on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or availability of the content on this website.
            </p>

            <h6>Governing Law</h6>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising under or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction].
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
