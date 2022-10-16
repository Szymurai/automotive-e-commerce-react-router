import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true,
  };

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        isEmpty: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true,
    });
  };

  render() {
    return (
      <>
        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <h3>Skontaktuj się z nami!</h3>
            <textarea
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Wpisz swoją wiadomość..."
            ></textarea>
            <button>Wyślij wiadomość</button>
          </form>
          <Prompt
            when={!this.state.isEmpty}
            message="Masz uzupełnioną, lecz niewysłaną wiadomość, przechodząc na inną stronę utracisz swoją treść, kontynuować?"
          ></Prompt>
        </div>
      </>
    );
  }
}

export default ContactPage;
