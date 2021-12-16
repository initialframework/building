import React from "react";
import Bonsai from "./Bonsai";
import CondenserUnit from "./CondenserUnit";
import Crate from "./Crate";
import GachaponMachine from "./GachaponMachine";
import Mailbox from "./Mailbox";

function AccFirstFloorFrontRight() {
  let accFirstFloorFrontRight = <Bonsai />;
  switch (value) {
    case "Bonsai":
      accFirstFloorFrontRight = <Bonsai />;
      break;
    case "CondenserUnit":
      accFirstFloorFrontRight = <CondenserUnit />;
      break;
    case "Crate":
      accFirstFloorFrontRight = <Crate />;
      break;
    case "GachaponMachine":
      accFirstFloorFrontRight = <GachaponMachine />;
      break;
    case "Mailbox":
      accFirstFloorFrontRight = <Mailbox />;
      break;
    default:
      accFirstFloorFrontRight = <Bonsai />;
  }
  return <>{accFirstFloorFrontRight}</>;
}

export default AccFirstFloorFrontRight;
