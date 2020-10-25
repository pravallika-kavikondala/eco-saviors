import React, { PureComponent } from "react";
import "./App.css";
import InfoPopup from "./InfoPopup";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.png";
import { data } from "../data";

class App extends PureComponent {
  state = {
    showPopup: false,
    title: "",
    content: "",
    subitems: [],
  };

  closeModal = () =>
    this.setState({ showPopup: false, title: "", content: "", subitems: [] });

  render() {
    return (
      <main className="app">
        <Carousel>
          <Carousel.Item>
            <img
              width="500"
              height="450"
              className="d-block w-100"
              src={pic1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="500"
              height="450"
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="500"
              height="450"
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="about_us">
          <header>Eco-Saviors</header>
          <p># Make the right contribution</p>
          <p>
            Do you want to make a positive impact towards the climate? You’re at
            the right place! We at “Eco-saviors” help you achieve this! We’re
            dedicated to providing the best waste disposal services. Check out
            our EcoBot to get started.
          </p>
        </div>

        <section className="learn_more_section">
          <div>
            {data.map(({ title, content, subitems }) => (
              <button
                className="popup_button"
                key={title}
                onClick={() =>
                  this.setState({
                    showPopup: true,
                    content: content,
                    title: title,
                    subitems: subitems,
                  })
                }
              >
                {title}
              </button>
            ))}
          </div>
          <img
            width="800"
            height="500"
            src={pic4}
            alt="Share of global population and Municipal Solid Waste (MSW) for G20 countries"
          />
        </section>

        <InfoPopup
          title={this.state.title}
          content={this.state.content}
          subitems={this.state.subitems}
          showPopup={this.state.showPopup}
          handleClose={this.closeModal}
        />
      </main>
    );
  }
}

export default App;
