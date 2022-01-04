import React from "react";
const BaseFive = React.lazy(() => import("./BaseFive"));
const BaseFour = React.lazy(() => import("./BaseFour"));
const BaseOne = React.lazy(() => import("./BaseOne"));
const BaseSix = React.lazy(() => import("./BaseSix"));
const BaseThree = React.lazy(() => import("./BaseThree"));
const BaseTwo = React.lazy(() => import("./BaseTwo"));

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
