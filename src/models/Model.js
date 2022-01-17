import React from "react";
import Base from "./buildings/base/Base";
import FirstFloor from "./buildings/firstFloor/FirstFloor";
import SecondFloor from "./buildings/secondFloor/SecondFloor";
import AccBase from "./buildings/accBase/AccBase";
import AccFirstFloorFrontLeft from "./buildings/accFirstFloorFrontLeft/AccFirstFloorFrontLeft";
import AccFirstFloorFrontRight from "./buildings/accFirstFloorFrontRight/AccFirstFloorFrontRight";
import AccFirstFloorRightLowerBack from "./buildings/accFirstFloorRightLowerBack/AccFirstFloorRightLowerBack";
import AccFirstFloorRightLowerFront from "./buildings/accFirstFloorRightLowerFront/AccFirstFloorRightLowerFront";
import AccFirstFloorRightUpperBack from "./buildings/accFirstFloorRightUpperBack/AccFirstFloorRightUpperBack";
import AccFirstFloorRightUpperFront from "./buildings/accFirstFloorRightUpperFront/AccFirstFloorRightUpperFront";
import AccSecondFloorBackLeft from "./buildings/accSecondFloorBackLeft/AccSecondFloorBackLeft";
import AccSecondFloorBackRight from "./buildings/accSecondFloorBackRight/AccSecondFloorBackRight";
import AccSecondFloorLeftBack from "./buildings/accSecondFloorLeftBack/AccSecondFloorLeftBack";
import AccSecondFloorLeftFront from "./buildings/accSecondFloorLeftFront/AccSecondFloorLeftFront";
import AccSecondFloorRightBack from "./buildings/accSecondFloorRightBack/AccSecondFloorRightBack";
import AccSecondFloorRightFront from "./buildings/accSecondFloorRightFront/AccSecondFloorRightFront";
import Front from "./buildings/front/Front";
import MainSign from "./buildings/mainSign/MainSign";
import SmallSign from "./buildings/smallSign/SmallSign";
import Back from "./buildings/back/Back";

function Model({ data }) {
  return (
    <>
      <Base value={data[0]?.value.replace(/\s/g, "") ?? "BaseFour"} />
      <AccBase value={data[1]?.value.replace(/\s/g, "") ?? "PoleEleven"} />
      <FirstFloor value={data[2]?.value.replace(/\s/g, "") ?? "TypeFiveteen"} />
      <AccFirstFloorFrontLeft
        value={data[3]?.value.replace(/\s/g, "") ?? "Crate"}
      />
      <AccFirstFloorFrontRight
        value={data[4]?.value.replace(/\s/g, "") ?? "Bonsai"}
      />
      <AccFirstFloorRightLowerBack
        value={data[5]?.value.replace(/\s/g, "") ?? "Bottles"}
      />
      <AccFirstFloorRightLowerFront
        value={data[6]?.value.replace(/\s/g, "") ?? "Poster"}
      />
      <AccFirstFloorRightUpperBack
        value={data[7]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeA"}
      />
      <AccFirstFloorRightUpperFront
        value={data[8]?.value.replace(/\s/g, "") ?? "LightBox"}
      />
      <SecondFloor
        value={data[9]?.value.replace(/\s/g, "") ?? "TypeFiveteen"}
      />
      <AccSecondFloorBackLeft
        value={data[10]?.value.replace(/\s/g, "") ?? "WallVent"}
      />
      <AccSecondFloorBackRight
        value={data[11]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeA"}
      />
      <AccSecondFloorLeftBack
        value={data[12]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeB"}
      />
      <AccSecondFloorLeftFront
        value={data[13]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeB"}
      />
      <AccSecondFloorRightBack
        value={data[14]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeD"}
      />
      <AccSecondFloorRightFront
        value={data[15]?.value.replace(/\s/g, "") ?? "CondenserUnitTypeA"}
      />
      <Front value={data[16]?.value.replace(/\s/g, "") ?? "RollingDoorTwo"} />
      <Back value={data[17]?.value.replace(/\s/g, "") ?? "BackdoorOne"} />
      <MainSign value={data[18]?.value.replace(/\s/g, "") ?? "Laundry"} />
      <SmallSign value={data[19]?.value.replace(/\s/g, "") ?? "NetcafeSign"} />
    </>
  );
}

export default Model;
