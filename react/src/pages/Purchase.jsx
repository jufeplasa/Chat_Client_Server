import UserIcon from "/src/assets/user-icon.png";
import { SideBar } from "../components";

function Purchase() {
  return (
    <div className="container">
      <SideBar activeName={"purchase"} />
      <main className="content">
        <header className="header">
          <h1>Purchases</h1>
          <img src={UserIcon} />
        </header>
        <div className="content-table">
          <div className="tabs">
            <button className="tab active">All Purchases</button>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Purchase ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#12548796</td>
                  <td>28 Jan, 12:30 AM</td>
                  <td>$500</td>
                  <td>
                    <button className="download-btn">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>#12548795</td>
                  <td>28 Jan, 9:30 AM</td>
                  <td>$200</td>
                  <td>
                    <button className="download-btn">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>#12548794</td>
                  <td>27 Jan, 11:30 AM</td>
                  <td>$100</td>
                  <td>
                    <button className="download-btn">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>#12548793</td>
                  <td>25 Jan, 1:30 PM</td>
                  <td>$900</td>
                  <td>
                    <button className="download-btn">Download</button>
                  </td>
                </tr>
                <tr>
                  <td>#12548792</td>
                  <td>25 Jan, 12:30 AM</td>
                  <td>$1000</td>
                  <td>
                    <button className="download-btn">Download</button>
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

export default Purchase;
