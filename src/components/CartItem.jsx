function CartItem({ item, onRemove }) {
    return (
      <div className="cart-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    );
  }
  
  export default CartItem;
  