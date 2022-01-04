import React from "react";
const Bonsai = React.lazy(() => import("./Bonsai"));
const CondenserUnit = React.lazy(() => import("./CondenserUnit"));
const Crate = React.lazy(() => import("./Crate"));
const GachaponMachine = React.lazy(() => import("./GachaponMachine"));
const Mailbox = React.lazy(() => import("./Mailbox"));

function AccFirstFloorFrontRight({ value }) {
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
