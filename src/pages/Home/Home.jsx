import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";

function Home() {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Banner />
        <section className="cards">
          <h2 className="sr-only">Features</h2>
          <Card
            image={iconChat}
            descriptionImage="Chat Icon"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. "
          />
          <Card
            image={iconMoney}
            descriptionImage="Money Icon"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be! "
          />
          <Card
            image={iconSecurity}
            descriptionImage="Security Icon"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe. "
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
