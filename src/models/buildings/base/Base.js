import React from "react";
import BaseFive from "./BaseFive";
import BaseFour from "./BaseFour";
import BaseOne from "./BaseOne";
import BaseSix from "./BaseSix";
import BaseThree from "./BaseThree";
import BaseTwo from "./BaseTwo";

function Base({ value }) {
  let base = <BaseThree />;
  switch (value) {
    case "BaseFive":
      base = <BaseFive />;
      break;
    case "BaseFour":
      base = <BaseFour />;
      break;
    case "BaseOne":
      base = <BaseOne />;
      break;
    case "BaseSix":
      base = <BaseSix />;
      break;
    case "BaseThree":
      base = <BaseThree />;
      break;
    case "BaseTwo":
      base = <BaseTwo />;
      break;
    default:
      base = <BaseThree />;
  }
  return <>{base}</>;
}

export default Base;
