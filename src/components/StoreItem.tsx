import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

  const quantity = 0
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <CardBody className="d-flex flex-column">
        <CardTitle className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </CardTitle>
        {quantity === 0 ? (
          <Button >Add to Cart</Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: "0.5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <Button >-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button >+</Button>
            </div>
            <div>
              <Button
               
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
