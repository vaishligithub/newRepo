import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { remove } from "./CartSlice";

const Cart=()=>{
    const Product=useSelector(state=>state.cart)
    const dispatch=useDispatch()

  const removeToCart=(id)=>{
    dispatch(remove(id))
  }
    
        //    console.log("product",Product) 
      {/* <h1>Product</h1> */}
      return(
      <>
        {
          Product.map((product) => (
            <>
              <div className="col-md-12  my-3  mx-auto">
                {/* <h1>{product.title}</h1> */}
                <Card key={product.id} className="h-80">
                <div className="text-center">
                  <Card.Img className="my-3"
                    style={{ height: "10rem" , width:"18rem",}}
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
                       onClick={() => removeToCart(product.id)}
                      variant="danger"
                    >
                      Remove from cart
                    </Button> 
                  </Card.Body>
                  </div>
                </Card>
              </div>
            </>
          ))
        }
          </>
        
      )   
    

}
export default Cart;

