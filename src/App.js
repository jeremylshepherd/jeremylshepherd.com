import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import { tempURL } from "./utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      show: false,
      src: "",
      altText: ""
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  getPhotos() {
    fetch(tempURL)
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            photos: data.photoset.photo
          });
        },
        err => {
          console.log(err.toString());
        }
      );
  }

  showModal(src, altText) {
    this.setState({
      show: true,
      src,
      altText
    });
  }

  hideModal() {
    this.setState({
      show: false,
      src: ""
    });
  }

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    const { altText, photos, show, src } = this.state;
    return (
      <div>
        <Nav />
        <Hero images={photos} showModal={this.showModal} show={show} />
        <Footer />
        {show ? (
          <Modal
            show={show}
            hide={this.hideModal}
            src={src}
            altText={altText}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
