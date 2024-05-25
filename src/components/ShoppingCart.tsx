import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({  }: ShoppingCartProps) {
  return (
    <Offcanvas placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
        
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
