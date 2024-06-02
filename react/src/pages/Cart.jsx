import UserIcon from "/src/assets/user-icon.png";
import { SideBar } from "../components";

function Cart() {
  return (
    <div className="container">
      <SideBar activeName={"cart"} />
      <main className="content">
        <header className="header">
          <h1>Cart</h1>
          <img src={UserIcon} />
        </header>
        <div className="content-table">
          <div className="tabs">
            <h3>Actual cart</h3>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total per Article</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Arte Abstracto</td>
                  <td>$100</td>
                  <td>3</td>
                  <td>$300</td>
                  <td className="buttons-actions">
                    <button className="plus-btn">+</button>
                    <button className="minus-btn">-</button>
                    <button className="download-btn">Quick</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Arte Abstracto</td>
                  <td>$100</td>
                  <td>3</td>
                  <td>$300</td>
                  <td className="buttons-actions">
                    <button className="plus-btn">+</button>
                    <button className="minus-btn">-</button>
                    <button className="download-btn">Quick</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Arte Abstracto</td>
                  <td>$100</td>
                  <td>3</td>
                  <td>$300</td>
                  <td className="buttons-actions">
                    <button className="plus-btn">+</button>
                    <button className="minus-btn">-</button>
                    <button className="download-btn">Quick</button>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td>Arte Abstracto</td>
                  <td>$100</td>
                  <td>3</td>
                  <td>$300</td>
                  <td className="buttons-actions">
                    <button className="plus-btn">+</button>
                    <button className="minus-btn">-</button>
                    <button className="download-btn">Quick</button>
                  </td>
                </tr>
                <tr>
                  <td className="cart-actions">
                    <h4>Total</h4>
                    <h4>$2,384</h4>
                    <button className="download-btn">Buy</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
