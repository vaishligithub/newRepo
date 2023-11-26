import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector} from "react-redux";
import { add } from "./CartSlice";
import { getProducts } from "./ProductSlice";
const Product = () => {
  const dispatch = useDispatch();
  const {data: state, status}=useSelector(state=>state.products);
  // const [state, setState] = useState([]);
  // const fetchProduct = async () => {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/products`);
  //     const data = await response.json();
  //     console.log(data, "data");
  //     setState(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {

    dispatch(getProducts());
  }, []);
  console.log("status",status)
  if(status  === 'loading'){
    return <p>loading...</p>
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  
  console.log(state, "state");
  return (
    <div>
      {/* <h1>Product</h1> */}
      <div className="container">
        <div className="row ">
          {state.map((product) => (
            <>
              <div className="col-md-4  my-3">
                {/* <h1>{product.title}</h1> */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    style={{ height: "10rem" }}
                    variant="top"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button
                      onClick={() => addToCart(product)}
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
          ;
        </div>
      </div>
    </div>
  );
};

export default Product;
