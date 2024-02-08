import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who We Are</h1>
        <p>
          Welcome to NIKAM Pizza Shop! We take pride in being a leading provider
          of delicious pizzas. Our mission is to deliver exceptional taste and
          quality to pizza lovers around the world. With our passion for
          pizza-making and dedication to customer satisfaction, we strive to
          create an unforgettable dining experience for each and every customer.
        </p>

        <h1>Our Specialties</h1>
        <Row>
          <Col md={6}>
            <p>
              At NIKAM Pizza Shop, we specialize in crafting a wide range of
              mouthwatering pizzas. From classic flavors like Margherita and
              Pepperoni to unique combinations like BBQ Chicken and Veggie
              Delight, we have something to please every palate. We use only the
              freshest ingredients and perfect our dough and sauce recipes to
              ensure each pizza is a masterpiece of flavor.
            </p>
          </Col>
          <Col md={6}>
            <p>
              We also offer a variety of specialty pizzas that cater to specific
              tastes and dietary preferences. Whether you're a meat lover,
              vegetarian, or vegan, we have options that will satisfy your
              cravings. Our commitment to quality extends beyond the toppings.
              We pay attention to every detail, from the perfect cheese melt to
              the ideal crust crispness, to deliver a truly exceptional pizza
              experience.
            </p>
          </Col>
        </Row>

        <Row>
          <h1>Our Chief Chef</h1>
          <Col md={3}>
            <img
              src="/images/cheif1.jpg"
              alt="Chief Chef"
              style={{ width: "100%" }}
            />
            <p>
              Meet Chef Michael Johnson, our renowned Chief Chef at Pizza Hut.
              With over 15 years of culinary experience, Chef Michael brings
              creativity and expertise to every dish he creates. His passion for
              cooking and dedication to quality have earned him several
              accolades in the culinary world. Chef Michael's innovative
              approach to pizza-making has elevated our menu and made Pizza Hut
              a go-to destination for pizza lovers.
            </p>
          </Col>
          <Col md={3}>
            <img
              src="/images/cheif2.jpg"
              alt="Chief Chef"
              style={{ width: "100%" }}
            />
            <p>
              Chef Jessica Martinez is a highly skilled pastry chef who
              specializes in creating delectable desserts. With her unique
              flavor combinations and artistic presentation, Chef Jessica adds a
              sweet touch to our menu. Her exquisite desserts, such as our
              signature Chocolate Lava Cake and New York Cheesecake, are the
              perfect way to end your pizza feast.
            </p>
          </Col>
          <Col md={3}>
            <img
              src="/images/cheif3.jpg"
              alt="Chief Chef"
              style={{ width: "100%",height:"50%" }}
            />
            <p>
              Chef David Thompson is a master of international cuisine. His
              expertise in blending flavors from different cultures has inspired
              our diverse range of specialty pizzas. From the zesty Margherita
              to the spicy BBQ Chicken, Chef David's creations take your taste
              buds on a culinary journey around the world.
            </p>
          </Col>
          <Col md={3}>
            <img
              src="/images/cheif4.jpg"
              alt="Chief Chef"
              style={{ width: "100%" }}
            />
            <p>
              Chef Emily Wilson is our resident vegan chef, dedicated to
              creating delicious plant-based options. With her knowledge of
              vegan ingredients and flavors, Chef Emily has developed a range of
              vegan pizzas that are both nutritious and bursting with taste.
              Whether you're a vegan or simply enjoy exploring new flavors, Chef
              Emily's creations will satisfy your cravings.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;