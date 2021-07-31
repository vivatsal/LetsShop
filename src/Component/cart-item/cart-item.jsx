import "./cart-item.styles.scss";

const CartItem = ({item}) => {
    
    const {name, price, imageUrl, quantity} = item;

    return(
        <div class="cart-item">
            <img className="image" src={imageUrl} alt="cart-item" />
            <div className="item-details">
                <span className="item-name">{name}</span>
                <span className="item-price">{quantity} X ${price}</span>
            </div>
            
        </div>
    )

}

export default CartItem;