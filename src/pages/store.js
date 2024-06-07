// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const patientSlice = createSlice({
//   name: "patient",
//   initialState: {
//     patientInfo: {
//       patientId: '',
//       isInfant: false,
//       firstName: '',
//       age: '',
//       gender: '',
//     },
//     patientInfo1: {
//         patientId: '',
//         isInfant: false,
//         firstName: '',
//         age: '',
//         gender: '',
//       },
//   },
//   reducers: {
//     setPatientInfo(state, action) {
//       state.patientInfo = action.payload;
//     },
//     setPatientInfo1(state, action) {
//         state.patientInfo1 = action.payload;
//       },
//   },
// });


// // const patientInfo1Slice = createSlice({
// //     name: "PatientInfo1Details",
// //     initialState: {
     
// //     },
// //     reducers: {
// //       setPatientInfo1(state, action) {
// //         state.patientInfo1 = action.payload;
// //       },
// //     },
// //   });
// export const { setPatientInfo } = patientSlice.actions;

// export default configureStore({
//   reducer: {
//     patient: patientSlice.reducer,
//     // patient1action: patientInfo1Slice.reducer,
//   },
// });


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
