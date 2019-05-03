import React from "react";
import { src, srcLarge } from "../utils";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
  }

  showModal(src, altText) {
    this.props.showModal(src, altText);
  }

  render() {
    const tiles = this.props.images.map((img, i) => {
      return (
        <img
          key={img.id}
          className="tile"
          src={src(img)}
          alt={img.title}
          onClick={() => this.showModal(srcLarge(img), img.title)}
        />
      );
    });
    return (
      <div className="wrapper">
        <div className="tableau">{tiles}</div>
      </div>
    );
  }
}

export default Hero;
