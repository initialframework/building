import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { supabase } from "../supabase";
import { Data } from "./dummyData";

const initialState = {
  buildingByUrl: {
    name: "voxal-one",
    description: "Voxel metaverse",
    image: "api.voxel/1",
    attributes: [
      {
        trait_type: "base",
        value: "BaseThree",
      },
      {
        trait_type: "accBase",
        value: "PoleTwo",
      },
      {
        trait_type: "firstFloor",
        value: "TypeFourteen",
      },
      {
        trait_type: "accFirstFloorFrontLeft",
        value: "CafeSignBoard",
      },
      {
        trait_type: "accFirstFloorFrontRight",
        value: "Bonsai",
      },
      {
        trait_type: "accFirstFloorRightLowerBack",
        value: "Bottles",
      },
      {
        trait_type: "accFirstFloorRightLowerFront",
        value: "BlueTrashBin",
      },
      {
        trait_type: "accFirstFloorRightUpperBack",
        value: "CondenserUnitTypeA",
      },
      {
        trait_type: "accFirstFloorRightUpperFront",
        value: "ElectricBox",
      },
      {
        trait_type: "secondFloor",
        value: "TypeFourteen",
      },
      {
        trait_type: "accSecondFloorBackLeft",
        value: "CondenserUnitTypeABackLeftFloorTwo",
      },
      {
        trait_type: "accSecondFloorBackRight",
        value: "CondenserUnitTypeABackRightFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftBack",
        value: "CondenserUnitTypeBLeftBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorLeftFront",
        value: "CondenserUnitTypeALeftFrontFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightBack",
        value: "CondenserUnitTypeARightBackFloorTwo",
      },
      {
        trait_type: "accSecondFloorRightFront",
        value: "CondenserUnitTypeBRightFrontFloorTwo",
      },
      {
        trait_type: "front",
        value: "WhiteTwo",
      },
      {
        trait_type: "mainSign",
        value: "Dvd",
      },
      {
        trait_type: "smallSing",
        value: "MinimartSign",
      },
    ],
  },
  buildingByUrlStatus: "idle",
  buildingByUrlError: null,
};

const dummy = Data;

export const fetchBuildingByUrl = createAsyncThunk(
  "buildings/fetchBuildingByUrl",
  async (data) => {
    const response = dummy.find(({ id }) => id === data);
    return response;
  }
);

const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    clearBuildingByUrlStatus: (state) => {
      state.buildingByUrlStatus = "idle";
    },
  },
  extraReducers: {
    [fetchBuildingByUrl.pending]: (state) => {
      state.buildingByUrlStatus = "loading";
    },
    [fetchBuildingByUrl.fulfilled]: (state, action) => {
      state.buildingByUrlStatus = "succeeded";
      state.buildingByUrl = action.payload;
    },
    [fetchBuildingByUrl.rejected]: (state, action) => {
      state.buildingByUrlStatus = "failed";
      state.buildingByUrlError = action.error.message;
    },
  },
});

export const { clearBuildingByUrlData } = buildingsSlice.actions;

export default buildingsSlice.reducer;
