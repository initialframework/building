import React from "react";
const TypeEight = React.lazy(() => import("./TypeEight"));
const TypeEighteen = React.lazy(() => import("./TypeEighteen"));
const TypeEleven = React.lazy(() => import("./TypeEleven"));
const TypeFive = React.lazy(() => import("./TypeFive"));
const TypeFiveteen = React.lazy(() => import("./TypeFiveteen"));
const TypeFour = React.lazy(() => import("./TypeFour"));
const TypeFourteen = React.lazy(() => import("./TypeFourteen"));
const TypeNine = React.lazy(() => import("./TypeNine"));
const TypeOne = React.lazy(() => import("./TypeOne"));
const TypeSeven = React.lazy(() => import("./TypeSeven"));
const TypeSeventeen = React.lazy(() => import("./TypeSeventeen"));
const TypeSix = React.lazy(() => import("./TypeSix"));
const TypeSixteen = React.lazy(() => import("./TypeSixteen"));
const TypeTen = React.lazy(() => import("./TypeTen"));
const TypeThirteen = React.lazy(() => import("./TypeThirteen"));
const TypeThree = React.lazy(() => import("./TypeThree"));
const TypeTwelve = React.lazy(() => import("./TypeTwelve"));
const TypeTwo = React.lazy(() => import("./TypeTwo"));

function FirstFloor({ value }) {
  let firstFloor = <TypeFourteen />;
  switch (value) {
    case "TypeEight":
      firstFloor = <TypeEight />;
      break;
    case "TypeEighteen":
      firstFloor = <TypeEighteen />;
      break;
    case "TypeEleven":
      firstFloor = <TypeEleven />;
      break;
    case "TypeFive":
      firstFloor = <TypeFive />;
      break;
    case "TypeFour":
      firstFloor = <TypeFour />;
      break;
    case "TypeFourteen":
      firstFloor = <TypeFourteen />;
      break;
    case "TypeNine":
      firstFloor = <TypeNine />;
      break;
    case "TypeOne":
      firstFloor = <TypeOne />;
      break;
    case "TypeSeven":
      firstFloor = <TypeSeven />;
      break;
    case "TypeSeventeen":
      firstFloor = <TypeSeventeen />;
      break;
    case "TypeSix":
      firstFloor = <TypeSix />;
      break;
    case "TypeSixteen":
      firstFloor = <TypeSixteen />;
      break;
    case "TypeTen":
      firstFloor = <TypeTen />;
      break;
    case "TypeThirteen":
      firstFloor = <TypeThirteen />;
      break;
    case "TypeThree":
      firstFloor = <TypeThree />;
      break;
    case "TypeTwelve":
      firstFloor = <TypeTwelve />;
      break;
    case "TypeTwo":
      firstFloor = <TypeTwo />;
      break;
    case "TypeFiveteen":
      firstFloor = <TypeFiveteen />;
      break;
    default:
      firstFloor = <TypeFourteen />;
  }
  return <>{firstFloor}</>;
}

export default FirstFloor;
