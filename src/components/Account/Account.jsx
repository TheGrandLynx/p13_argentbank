import React from "react";

function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="accountContainer">
        <h3 className="accountContainer__title">{title}</h3>
        <p className="accountContainer__amount">{amount}</p>
        <p className="accountContainer__description">{description}</p>
      </div>
      <div className="accountCtaContainer">
        <button className="accountCtaContainer__transactionButton">
          View transactions
        </button>
      </div>
    </section>
  );
}

export default Account;
