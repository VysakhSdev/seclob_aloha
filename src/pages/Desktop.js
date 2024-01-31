import { useEffect, useState } from "react";
import "./Desktop.css";

const Desktop = () => {
  const [clicked, setClicked] = useState(false);
  const itemsData = ["Adventure", "Culinary", "Eco-tourism", "Family", "Sport"];
  const [items, setItems] = useState(itemsData);
  const tileData = [
  {
    title: "Surfing",
    description: "Best Hawaiian islands for surfing.",
    imageUrl: "/image@2x.png",
  },
  {
    title: "Hula",
    description: "Try it yourself.",
    imageUrl: "/rectangle-6@2x.png",
  },
  {
    title: "Vulcanoes",
    description: "Volcanic conditions can change at any time.",
    imageUrl: "/rectangle-6-1@2x.png",
  },
];
  
//--for sidebar--
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleMenuItemClick = () => {
    setClicked(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && clicked) {
        setClicked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clicked]);

  return (
    <div className="desktop">
      <section className="top-bar-menu">
        <div className="head">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <header className="top-bar">
            <div className="menu">
              <img
                className="aloha-icon"
                loading="eager"
                alt=""
                src="/aloha.svg"
              />
              <div className="menu-toggler" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
              <div className={clicked ? "menu-items active" : "menu-items "}>
                <div className="nav-links" onClick={handleMenuItemClick}>
                  Home
                </div>
                <div className="nav-links" onClick={handleMenuItemClick}>
                  Surfing
                </div>
                <div className="nav-links" onClick={handleMenuItemClick}>
                  Hula
                </div>
                <div className="nav-links" onClick={handleMenuItemClick}>
                  Vulcano
                </div>
                <button className="button-side">
                  <b className="book-a-trip">Book a trip</b>
                </button>
              </div>
            </div>
            <button className="button">
              <b className="book-a-trip">Book a trip</b>
            </button>
          </header>
          <h1 className="welcome-to-hawaii-container">
            <span>
              <p className="welcome">Welcome</p>
              <p className="to-hawaii">
                to
                <span className="span">{` `}</span>Hawaii
              </p>
            </span>
          </h1>
        </div>
      </section>
      <section className="main-frame">
        <b className="highlights">Highlights</b>
        <div className="top-surfing-text">
        {tileData.map((title, index) => (
        <div key={index} className={`tile-${index + 1}`}>
          <img
            className="image"
            loading="eager"
            alt=""
            src={title?.imageUrl}
          />
          <div className="text">
            <div className="top">
              <h3 className="surfing1">{title?.title}</h3>
              <div className="best-hawaiian-islands">{title?.description}</div>
            </div>
            <div className="bottom">
              <img
                className="bottom-child"
                loading="eager"
                alt=""
                src="/group-1.svg"
              />
            </div>
          </div>
        </div>
      ))}
          
        </div>
      </section>
      <section className="section-wrapper">
        <form className="section">
          <div className="section-child" />
          <div className="catergories-parent">
            <b className="catergories">Catergories</b>
            <div className="all">
              {items.map((category, index) => (
                <div key={index} className="item">
                  <input
                    className={category.toLowerCase().replace(" ", "-")}
                    placeholder={category}
                    type="text"
                  />
                  <img
                    className={`item-child${index}`}
                    alt=""
                    src="/group-1-3.svg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="travel-guide-parent">
            <b className="travel-guide">Travel Guide</b>
            <div className="container">
              <div className="container-child" />
              <div className="frame-parent">
                <div className="hadwin-malone-parent">
                  <h3 className="hadwin-malone">Hadwin Malone</h3>
                  <div className="guide-since-2012">Guide since 2012</div>
                </div>
                <button className="button1">
                  <b className="contact">Contact</b>
                </button>
              </div>
              <img
                className="container-item"
                loading="eager"
                alt=""
                src="/ellipse-10@2x.png"
              />
            </div>
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="menu-wrapper">
          <div className="menu1">
            <img
              className="aloha-icon1"
              loading="eager"
              alt=""
              src="/aloha-1.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Desktop;
