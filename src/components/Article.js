import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgb(0 0 0 / 9%)",
    padding: "30px",
    boxSizing: "border-box",
    marginBottom: "30px",
    borderRadius: 20,
  };
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: "3px",
        }}
      >
        {title}
      </h3>
      <span
        style={{
          display: "block",
          marginBottom: 10,
          fontSize: 14,
        }}
      >
        {author}
      </span>
      <p
        style={{
          fontSize: 18,
        }}
      >
        {text}
      </p>
    </article>
  );
};

export default Article;
