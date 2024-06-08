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
const AddDeviceDetailsslice = createSlice({
  name: "AddDeviceDetails",
  initialState: {
    addDevice: {
      device1: true,
      device2: false,
      device3: false,
      device4: false,
      device5: false,
    },
  deviceTest: {
      device1: false,
      device2: false,
      device3: false,
      device4: false,
      device5: false,
    },
  },
  reducers: {
    setAddDevice(state, action) {
      state.addDevice = action.payload;
    },
    setAddDevice2(state, action) {
      state.addDevice.device2 = action.payload;
    },
    setAddDevice3(state, action) {
      state.addDevice.device3 = action.payload;
    },
    setAddDevice4(state, action) {
      state.addDevice.device4 = action.payload;
    },
    setAddDevice5(state, action) {
      state.addDevice.device5 = action.payload;
    },
    setDeviceTest(state, action) {
      state.deviceTest = action.payload;
    },
    setDeviceTest1(state, action) {
      state.deviceTest.device1 = action.payload;
    },
    setDeviceTest2(state, action) {
      state.deviceTest.device2 = action.payload;
    },
    setDeviceTest3(state, action) {
      state.deviceTest.device3 = action.payload;
    },
    setDeviceTest4(state, action) {
      state.deviceTest.device4 = action.payload;
    },
    setDeviceTest5(state, action) {
      state.deviceTest.device5 = action.payload;
    },
  },
});



export default configureStore({
  reducer: {
    patient: patientSlice.reducer,
    AddDeviceDetails:AddDeviceDetailsslice.reducer,
  },
});


export const { setPatientInfo, setPatientInfo1 } = patientSlice.actions;
export const setAddDeviceAction = AddDeviceDetailsslice.actions;