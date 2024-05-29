import { Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type cartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: cartItemProps) => {
  const { removeFromCart, itemQuantity } = useShoppingCartContext();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="f-flex w-100 justify-content-between">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="fs-5">
            {item.name} x {itemQuantity(id)}{" "}
          </span>
          <span className="text-muted">{formatCurrency(item.price)} </span>
        </div>
      </div>
      <div className="fs-5 d-flex align-items-center">
        {formatCurrency(item.price * itemQuantity(id))}
      </div>
      <button
        onClick={() => removeFromCart(id)}
        style={{ width: "50px", color: "crimson" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Stack>
  );
};
