import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addPizza } from "../../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../Loader";
import Error from "./../Error";
import Success from "./../Success";

const AddNewPizza = () => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState("");
  const [largprice, setlargprice] = useState("");
  const [mediumPrice, setmediumPrice] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheese, setCheese] = useState("");

  const addPizzaState = useSelector((state) => state.addPizzaReducer);
  const { loading, error, success } = addPizzaState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largprice,
      },
      sauce,
      cheese,
    };
    dispatch(addPizza(pizza));
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Add new pizza error" />}
      {success && <Success success="Pizza added successfully" />}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSauce">
            <Form.Label>Sauce</Form.Label>
            <Form.Control
              type="text"
              value={sauce}
              onChange={(e) => setSauce(e.target.value)}
              placeholder="Enter Sauce"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCheese">
            <Form.Label>Cheese</Form.Label>
            <Form.Control
              type="text"
              value={cheese}
              onChange={(e) => setCheese(e.target.value)}
              placeholder="Enter Cheese"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3"> 
        <Form.Group as={Col} controlId="formGridSmallPrice">
          <Form.Label>Small Price</Form.Label>
          <Form.Control
            type="text"
            value={smallPrice}
            onChange={(e) => setsmallPrice(e.target.value)}
            placeholder="Enter Small Price"
            bsPrefix="form-control"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridMediumPrice">
          <Form.Label>Medium Price</Form.Label>
          <Form.Control
            type="text"
            value={mediumPrice}
            onChange={(e) => setmediumPrice(e.target.value)}
            placeholder="Enter Medium Price"
            bsPrefix="form-control"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLargePrice">
          <Form.Label>Large Price</Form.Label>
          <Form.Control
            type="text"
            value={largprice}
            onChange={(e) => setlargprice(e.target.value)}
            placeholder="Enter Large Price"
            bsPrefix="form-control"
          />
        </Form.Group>
                
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Enter Category"
            />
          </Form.Group>
        </Row> 
     
        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
};

export default AddNewPizza;
