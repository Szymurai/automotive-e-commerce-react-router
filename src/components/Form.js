import React from "react";
import "../styles/Form.css";

const Form = (props) => {
  return (
    <form>
      <label>
        <div className="triangleContener">
          <div class="triangle"></div>
        </div>
        <input
          placeholder="Wpisz SKU"
          type="text"
          value={props.value}
          onChange={props.change}
          className="katalog"
        />
      </label>
    </form>
  );
};

export default Form;
