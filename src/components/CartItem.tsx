import { Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type cartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: cartItemProps) => {
 
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div>
        <div>
         
            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
            
            </span>
        
        </div>
        <div>
          <span></span>
        </div>
        <h2></h2>
      </div>
    </Stack>
  );
};
