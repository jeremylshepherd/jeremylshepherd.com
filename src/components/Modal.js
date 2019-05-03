import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.props.hide();
  }

  componentDidMount() {
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflowY = "unset";
  }

  render() {
    return (
      <div ref="modal" className="modal" onClick={this.hideModal}>
        <img
          className="lightbox"
          src={this.props.src}
          alt={this.props.altText}
        />
        <span
          className="fa fa-times-circle fa-2x close-icon"
          onClick={this.hideModal}
        />
      </div>
    );
  }
}

export default Modal;
