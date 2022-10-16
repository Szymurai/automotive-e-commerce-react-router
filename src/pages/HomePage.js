import React, { Component } from "react";
import Form from "../components/Form";
import Result from "../components/Result";
import "../styles/HomePage.css";

//Klucz do WooCommerce Rest API
const consumerKey = "ck_ac452ad50a1b0ab10a0b9e4b0785352868112084";
const consumerSecret = "cs_2eea762334734dc9e6ef756c56e0fec9b66b5f6e";

class HomePage extends Component {
  state = {
    img: "",
    value: "",
    name: "",
    sku: "",
    priceNetto: "",
    priceBrutto: "",
    quantity: "",
    partNumber: "",
    link: "",
    manufacturer: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState !== this.state.value) {
      const API = `https://automotivexpert.eu/wp-json/wc/v3/products?sku=${this.state.value.toLowerCase()}&consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
      fetch(API)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0 || data.length > 1) {
            throw Error("Nie działa");
          } else {
            const dataSet = data[0];
            const partNumber = dataSet.attributes.filter((data) =>
              data.name === "Numer katalogowy" ? data : null
            );
            const manufacturer = dataSet.attributes.filter((data) =>
              data.name === "Producent" ? data : null
            );
            this.setState((prevState) => ({
              img: dataSet.images[0].src,
              err: false,
              name: dataSet.name,
              sku: dataSet.sku,
              priceNetto: dataSet.price,
              priceBrutto: dataSet.price * 1.23,
              quantity: dataSet.stock_quantity,
              partNumber: partNumber[0].options[0],
              link: dataSet.permalink,
              manufacturer: manufacturer[0].options[0],
            }));
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState((prevState) => ({
            err: true,
            sku: prevState.value,
          }));
        });
    }
  }

  render() {
    return (
      <div className="homePage">
        {/* <p>
          <em>{"./"}</em>
        </p> */}
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result data={this.state} />
      </div>
    );
  }
}

export default HomePage;
