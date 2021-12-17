import React from "react";
import TypeEight from "./TypeEight";
import TypeEighteen from "./TypeEighteen";
import TypeEleven from "./TypeEleven";
import TypeFive from "./TypeFive";
import TypeFiveteen from "./TypeFiveteen";
// import TypeFour from "./TypeFour";
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
