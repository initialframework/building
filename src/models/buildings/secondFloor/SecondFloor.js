import React from "react";
const TypeEight = React.lazy(() => import("./TypeEight"));
const TypeEighteen = React.lazy(() => import("./TypeEighteen"));
const TypeEleven = React.lazy(() => import("./TypeEleven"));
const TypeFive = React.lazy(() => import("./TypeFive"));
const TypeFiveteen = React.lazy(() => import("./TypeFiveteen"));
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

function SecondFloor({ value }) {
  let secondFloor = <TypeFourteen />;
  switch (value) {
    case "TypeEight":
      secondFloor = <TypeEight />;
      break;
    case "TypeEighteen":
      secondFloor = <TypeEighteen />;
      break;
    case "TypeEleven":
      secondFloor = <TypeEleven />;
      break;
    case "TypeFive":
      secondFloor = <TypeFive />;
      break;
    // case "TypeFour":
    //   secondFloor = <TypeFour />;
    //   break;
    case "TypeFourteen":
      secondFloor = <TypeFourteen />;
      break;
    case "TypeNine":
      secondFloor = <TypeNine />;
      break;
    case "TypeOne":
      secondFloor = <TypeOne />;
      break;
    case "TypeSeven":
      secondFloor = <TypeSeven />;
      break;
    case "TypeSeventeen":
      secondFloor = <TypeSeventeen />;
      break;
    case "TypeSix":
      secondFloor = <TypeSix />;
      break;
    case "TypeSixteen":
      secondFloor = <TypeSixteen />;
      break;
    case "TypeTen":
      secondFloor = <TypeTen />;
      break;
    case "TypeThirteen":
      secondFloor = <TypeThirteen />;
      break;
    case "TypeThree":
      secondFloor = <TypeThree />;
      break;
    case "TypeTwelve":
      secondFloor = <TypeTwelve />;
      break;
    case "TypeTwo":
      secondFloor = <TypeTwo />;
      break;
    case "TypeFiveteen":
      secondFloor = <TypeFiveteen />;
      break;
    default:
      secondFloor = <TypeFourteen />;
  }
  return <>{secondFloor}</>;
}

export default SecondFloor;
