import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../supabase";

const initialState = {
  buildingByUrl: [
    { value: "BaseThree" },
    { value: "PoleTwo" },
    { value: "TypeFourteen" },
    { value: "CafeSignBoard" },
    { value: "Bonsai" },
    { value: "Bottles" },
    { value: "BlueTrashBin" },
    { value: "CondenserUnitTypeA" },
    { value: "ElectricBox" },
    { value: "TypeFourteen" },
    { value: "CondenserUnitTypeABackLeftFloorTwo" },
    { value: "CondenserUnitTypeABackRightFloorTwo" },
    { value: "CondenserUnitTypeBLeftBackFloorTwo" },
    { value: "CondenserUnitTypeALeftFrontFloorTwo" },
    { value: "CondenserUnitTypeARightBackFloorTwo" },
    { value: "CondenserUnitTypeBRightFrontFloorTwo" },
    { value: "WhiteTwo" },
    { value: "Dvd" },
    { value: "DvdSign" },
  ],
  buildingByUrlStatus: "idle",
  buildingByUrlError: null,
};

export const fetchBuildingByUrl = createAsyncThunk(
  "buildings/fetchBuildingByUrl",
  async (url) => {
    const response = await supabase
      .from("attributes")
      .select("*")
      .eq("name", url);
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
      state.buildingByUrl = action.payload.data;
    },
    [fetchBuildingByUrl.rejected]: (state, action) => {
      state.buildingByUrlStatus = "failed";
      state.buildingByUrlError = action.error.message;
    },
  },
});

export const { clearBuildingByUrlData } = buildingsSlice.actions;

export default buildingsSlice.reducer;
