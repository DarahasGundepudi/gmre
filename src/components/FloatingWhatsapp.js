import React from 'react';
import './FloatingWhatsapp.css';
import whatsapp_icon from "../assets/whatsapp.png"

class FloatingWhatsapp extends React.Component {
  openWhatsApp = () => {
    const adminNumber = '+919704233306';
    const whatsappLink = `https://wa.me/${adminNumber}`;
    window.open(whatsappLink, '_blank');
  };

  render() {
    return (
      <div className="floating-whatsapp-icon" onClick={this.openWhatsApp}>
        <img src={whatsapp_icon} alt="WhatsApp Icon" />
      </div>
    );
  }
}

export default FloatingWhatsapp;
