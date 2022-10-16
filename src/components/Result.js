import React from "react";
import "../styles/Result.css";

const Result = (props) => {
  const buttonTxt = "Zamów";
  const {
    name,
    err,
    link,
    manufacturer,
    partNumber,
    priceBrutto,
    priceNetto,
    quantity,
    sku,
    value,
    img,
  } = props.data;

  let content = null;

  if (!err && sku) {
    content = (
      <>
        <h4>Nazwa części:</h4>
        <p className="partName" style={{ fontStyle: "italic" }}>
          {name}
        </p>
        <div className="image">
          <img src={img} alt="Logo AutomotivExpert" className="partImg" />
        </div>
        <h4>Informacje uzupełniające:</h4>
        <div className="table">
          <div className="tableContent">
            SKU: <strong>{sku}</strong>
          </div>
          <div className="tableContent">
            Numer katalogowy: <strong>{partNumber}</strong>
          </div>
          <div className="tableContent">
            Producent: <strong>{manufacturer}</strong>
          </div>
          <div className="tableContent">
            Cena (netto): <strong>{priceNetto}</strong> zł
          </div>
          <div className="tableContent">
            Cena (brutto): <strong>{parseFloat(priceBrutto).toFixed(2)}</strong>{" "}
            zł
          </div>
          <div className="tableContent">
            Stan magazynowy: <strong>{quantity}</strong> sztuk
          </div>
        </div>
        <a href={link} className="cartButton">
          <strong>{buttonTxt.toUpperCase()}</strong>
        </a>
      </>
    );
  }

  return (
    <div className="result">
      {err ? (
        <h4>{`Nie mamy w bazie części o numerze SKU: ${sku}`}</h4>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
