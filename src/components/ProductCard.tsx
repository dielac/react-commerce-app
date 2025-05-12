import './ProductCard.css'; 

type ProductProps = {
  name: string;
  price: number;
  onAddToCart: () => void; // function that adds the item to the cart
};

//shows a product with a name, price, and button
const ProductCard = ({ name, price, onAddToCart }: ProductProps) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p> 
      <button onClick={onAddToCart}>Add to Cart 💖</button> 
    </div>
  );
};

export default ProductCard; 
