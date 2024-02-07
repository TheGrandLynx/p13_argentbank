import React from "react";

import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <div className="signin-page">
      <Header />
      <main className="bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
