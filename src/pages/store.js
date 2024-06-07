import { createSlice, configureStore } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patientInfo: {
      patientId: '',
      isInfant: false,
      firstName: '',
      age: '',
      gender: '',
    },
    patientInfo1: {
        patientId: '',
        testmode: 'QUICK TEST',
        firstName: '',
        age: '',
        gender: '',
      },
  },
  reducers: {
    setPatientInfo(state, action) {
      state.patientInfo = action.payload;
    },
    setPatientInfo1(state, action) {
        state.patientInfo1 = action.payload;
      },
  },
});

export const { setPatientInfo, setPatientInfo1 } = patientSlice.actions;

export default configureStore({
  reducer: {
    patient: patientSlice.reducer,
  },
});
