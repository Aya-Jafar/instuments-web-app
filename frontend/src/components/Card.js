import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Card() {

return (
        <div className="row">
        <div className="col-lg-12">
            <div className="box-element">
            <Link className="btn btn-outline-dark" to="/">&#x2190; Continue Shopping</Link>

            <br />
            <br />
            <table className="table">
                <tr>
                <th><h5>Items: <strong>{}</strong></h5></th>
                <th><h5>Total: <strong>${}</strong></h5></th>
                <th className="checkout-button">
                    <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                </th>


                </tr>
            </table>

            <br />
            <div className="box-element">
                <div className="cart-row">
                <div className="flex-column" style={{ flex: "2" }}></div>
                <div className="flex-column" style={{ flex: "2" }}><strong>Item</strong></div>
                <div className="flex-column" style={{ flex: "1" }}><strong>Price</strong></div>
                <div className="flex-column" style={{ flex: "1" }}><strong>Quantity</strong></div>
                <div className="flex-column" style={{ flex: "1" }}><strong>Total</strong></div>
                </div>
                <div className="cart-row">
                <div className="flex-column" style={{ flex: "2" }}>
                    <img className="row-image" src="" alt="item" />
                </div>
                <div className="flex-column" style={{ flex: "2" }}>
                    <p>{}</p>
                </div>
                <div className="flex-column" style={{ flex: "1" }}>
                    <p>${}</p>
                </div>
                <div className="flex-column" style={{ flex: "1" }}>
                    <p className="quantity">{}</p>
                    <div className="quantity">
                    <img data-action="add" className="chg-quantity update-cart" src="'images/arrow-up.png'" alt="increase" />
                    <img data-action="remove" className="chg-quantity update-cart" src="'images/arrow-down.png'" alt="decrease" />
                    </div>
                </div>
                <div className="flex-column" style={{ flex: "1" }}>
                    <p>${}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}


