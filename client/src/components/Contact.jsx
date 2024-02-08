import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>NIKAM Pizza Shop</h1>
            <p>
              Welcome to NIKAM Pizza Shop! We are dedicated to serving you
              delicious pizzas made with the finest ingredients. Our pizzas are
              crafted to perfection and will surely satisfy your cravings.
              Whether you prefer classic flavors or adventurous combinations, we
              have a variety of options to suit every taste bud.
            </p>
            <p>
              Our team of skilled chefs and friendly staff are committed to
              providing you with an exceptional dining experience. We strive to
              ensure that each visit to our shop leaves you craving for more.
              Join us and indulge in the flavors of our mouthwatering pizzas.
            </p>
            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Mobile</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@urdomain.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="images/farmhouse.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
