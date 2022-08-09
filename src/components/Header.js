import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header(){
  return (
    <React.Fragment>
      <h1>React Fundamentals</h1>
      <img src={ticketsImage} alt="ticket stubs" />
    </React.Fragment>
  );
}

export default Header;