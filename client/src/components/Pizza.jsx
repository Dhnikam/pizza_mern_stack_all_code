import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [cheese, setCheese] = useState("");
  const [sauce, setSauce] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(pizza, quantity, varient, cheese, sauce));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "250px", cursor: "pointer" }}
          onClick={handleShow}
        />

        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <div>
            <Row>
              <Col md={6}>
                <h6>Variants</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {Array.isArray(pizza.varients) && pizza.varients.map((varient) => (
                    <option key={varient}>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={6}>
                <h6>Cheese</h6>
                <select
                  value={cheese}
                  onChange={(e) => setCheese(e.target.value)}
                >
                  <option value="">Choose Cheese</option>
                  <option value="Mozzarella">Mozzarella</option>
                  <option value="Cheddar">Cheddar</option>
                  <option value="Parmesan">Parmesan</option>
                  <option value="Provolone">Provolone</option>
                  <option value="Feta">Feta</option>
                </select>
              </Col>
              <Col md={6}>
                <h6>Sauce</h6>
                <select
                  value={sauce}
                  onChange={(e) => setSauce(e.target.value)}
                >
                  <option value="">Choose Sauce</option>
                  <option value="Tomato">Tomato</option>
                  <option value="Barbecue">Barbecue</option>
                  <option value="Pesto">Pesto</option>
                  <option value="Alfredo">Alfredo</option>
                  <option value="Buffalo">Buffalo</option>
                </select>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={6}>
                <h6>Price: {pizza.prices[0][varient] * quantity} /-RS</h6>
              </Col>
              <Col md={6}>
                <Button
                  onClick={addToCartHandler}
                  className="bg-warning text-white"
                >
                  Add to cart
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "250px" }}
            />
          </div>
          <div>
            <h5>Description:</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
