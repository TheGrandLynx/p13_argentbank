import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import iconChat from "../../assets/icon-chat.png";
import iconMoney from "../../assets/icon-money.png";
import iconSecurity from "../../assets/icon-security.png";
import cardData from "../../data/cardData.json";

function Home() {
  const imageData = {
    "icon-chat.png": iconChat,
    "icon-money.png": iconMoney,
    "icon-security.png": iconSecurity,
  };
  return (
    //soutenance 2
    <div className="homepage">
      <Header />
      <main>
        <Banner />
        <section className="cards">
          <h2 className="sr-only">Features</h2>
          {cardData.map((data) => (
            <Card
              key={data.id}
              image={imageData[data.image]}
              descriptionImage={data.descriptionImage}
              title={data.title}
              description={data.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
