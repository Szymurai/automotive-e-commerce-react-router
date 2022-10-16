import React from "react";
import { Route, Redirect } from "react-router-dom";

const premission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        premission ? (
          <div style={{ textAlign: "center" }}>
            <h4>*Panel admina version 0.1.0*</h4>
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminPage;
