import React from "react";
import TypeEight from "./TypeEight";
import TypeEighteen from "./TypeEighteen";
import TypeEleven from "./TypeEleven";
import TypeFive from "./TypeFive";
import TypeFiveteen from "./TypeFiveteen";
import TypeFour from "./TypeFour";
import TypeFourteen from "./TypeFourteen";
import TypeNine from "./TypeNine";
import TypeOne from "./TypeOne";
import TypeSeven from "./TypeSeven";
import TypeSeventeen from "./TypeSeventeen";
import TypeSix from "./TypeSix";
import TypeSixteen from "./TypeSixteen";
import TypeTen from "./TypeTen";
import TypeThirteen from "./TypeThirteen";
import TypeThree from "./TypeThree";
import TypeTwelve from "./TypeTwelve";
import TypeTwo from "./TypeTwo";

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
