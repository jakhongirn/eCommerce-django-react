import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Review from "../components/Rating";
import products from "../products";
import axios from 'axios'

function ProductScreen({ match }) {

  const [product, setProduct] = useState([])

  useEffect(()=> {

      async function fetchProduct(){

          const {data} = await axios.get(`/api/products/${match.params.id}`)  /* Go to package.json */
          setProduct(data)
      }
      fetchProduct()
  }, [])

 /*  const product = products.find((p) => p._id === match.params.id); */ /* static file  */
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Review
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              ></Review>
            </ListGroup.Item>

            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
