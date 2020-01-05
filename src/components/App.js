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
  };

  closeModal = () =>
    this.setState({ showPopup: false, title: "", content: "" });

  render() {
    return (
      <main className="app">
        <Carousel>
          <Carousel.Item>
            <img
              width="500"
              height="400"
              className="d-block w-100"
              src={pic1}
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="500"
              height="400"
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width="500"
              height="400"
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="learn_more">
          <header>Learn more</header>
        </div>

        <section className="learn_more_section">
          <div className="popup_container">
            {data.map(({ title, content }) => (
              <button
                className="popup_button"
                key={title}
                onClick={() =>
                  this.setState({
                    showPopup: true,
                    content: content,
                    title: title,
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
          showPopup={this.state.showPopup}
          handleClose={this.closeModal}
        />
      </main>
    );
  }
}

export default App;
