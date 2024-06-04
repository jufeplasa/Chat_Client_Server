import UserIcon from "/src/assets/user-icon.png";
import { Card, SideBar } from "../components";
import { useState } from "react";

function Article() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    labels: "",
    url: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLabelsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      labels: value,
    }));
  };
  return (
    <div className="container">
      <SideBar activeName={"article"} />
      <main className="content">
        <header className="header">
          <h1>Add Article</h1>
          <img src={UserIcon} />
        </header>
        <div className="article-form">
          <div className="article-preview">
            <Card
              name={formData.name}
              price={formData.price}
              labels={formData.labels}
            />
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "start",
              backgroundColor: "#e9e9e9",
              width: "100%",
              height: "100%",
              padding: "20px",
              alignItems: "self-start",
            }}
          >
            <div className="article-form-group">
              <label className="article-label" htmlFor="name">
                Name
              </label>
              <input
                className="article-input"
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
                placeholder="Modern Picture"
              />
            </div>
            <div className="article-form-group">
              <label className="article-label" htmlFor="price">
                Price
              </label>
              <input
                className="article-input"
                type="text"
                id="price"
                name="price"
                onChange={handleInputChange}
                value={formData.price}
                placeholder="$15.00"
              />
            </div>
            <div className="article-form-group">
              <label className="article-label" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="article-input"
                type="text"
                id="quantity"
                name="quantity"
                onChange={handleInputChange}
                value={formData.quantity}
                placeholder="20"
              />
            </div>
            <div className="article-form-group">
              <label className="article-label" htmlFor="labels">
                Labels
              </label>
              <input
                className="article-input"
                type="text"
                id="labels"
                name="labels"
                onChange={handleLabelsChange}
                value={formData.labels}
                placeholder="New Label"
              />
              {formData.labels && (
                <div className="labels">
                  {formData.labels.split(",").map((label, index) => (
                    <span key={index} className="label">
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button type="button" className="add-btn">
              + Add
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Article;
