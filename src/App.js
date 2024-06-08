import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Splash from "./pages/Splash";
import HomeDevice1SelectTest from "./components/HomeDevice1SelectTest";
import LoginUIDPWD from "./pages/LoginUIDPWD";
import Home from "./pages/Home";
import AddReader1Device from "./pages/AddReader1Device";
import AddReaderConnecting1Dev from "./pages/AddReaderConnecting1Dev";
import AddReaderConnected1Device from "./pages/AddReaderConnected1Device";
import HomeDevice1ConnectedReady from "./pages/HomeDevice1ConnectedReady";
import MixBloodAndMarkerFluidA from "./pages/MixBloodAndMarkerFluidA";
import Covid19PrepareSampleDevic from "./pages/Covid19PrepareSampleDevic";
import Covid19TestDevice from "./pages/Covid19TestDevice";
import Covid19TestResultDevice from "./pages/Covid19TestResultDevice";
import MixBloodAndMarkerFluidB from "./pages/MixBloodAndMarkerFluidB";
import WetPaperADevice from "./pages/WetPaperADevice";
import WetPaperBDevice from "./pages/WetPaperBDevice";
import ApplySampleWithStamperDev from "./pages/ApplySampleWithStamperDev";
import FillWellsDevice from "./pages/FillWellsDevice";
import HbVariantRunningDevice from "./pages/HbVariantRunningDevice";
import HbVariantSummaryTestResult from "./pages/HbVariantSummaryTestResult";
import HomeDevice1TestRunning from "./pages/HomeDevice1TestRunning";
import HomeDevice5ConnectedReady from "./pages/HomeDevice5ConnectedReady";
import HbVariantPatientInfo from "./pages/HbVariantPatientInfo";
import Covid19PatientInfo from "./pages/Covid19PatientInfo";
import ConfirmPatientInfo from "./pages/ConfirmPatientInfo";
import Covid19ConfirmPatientInfo from "./pages/Covid19ConfirmPatientInfo";
import AddReader5Device from "./pages/AddReader5Device";
import HomeDevice5SelectTest from "./pages/HomeDevice5SelectTest";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/home-device-1-select-test":
        title = "";
        metaDescription = "";
        break;
      case "/loginuid-pwd":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/add-reader":
        title = "";
        metaDescription = "";
        break;
      case "/add-reader-connecting":
        title = "";
        metaDescription = "";
        break;
      case "/add-reader-connected-1-device":
        title = "";
        metaDescription = "";
        break;
      case "/home-device-1-connected-ready":
        title = "";
        metaDescription = "";
        break;
      case "/mix-blood-and-marker-fluid-a":
        title = "";
        metaDescription = "";
        break;
      case "/covid19-prepare-sample":
        title = "";
        metaDescription = "";
        break;
      case "/covid19-test":
        title = "";
        metaDescription = "";
        break;
      case "/covid19-test-result-device-1":
        title = "";
        metaDescription = "";
        break;
      case "/mix-blood-and-marker-fluid-b":
        title = "";
        metaDescription = "";
        break;
      case "/wet-paper-a":
        title = "";
        metaDescription = "";
        break;
      case "/wet-paper-b":
        title = "";
        metaDescription = "";
        break;
      case "/apply-sample-with-stamper":
        title = "";
        metaDescription = "";
        break;
      case "/fill-wells":
        title = "";
        metaDescription = "";
        break;
      case "/hb-variant-running":
        title = "";
        metaDescription = "";
        break;
      case "/hb-variant-summary-test-results-a-device-1":
        title = "";
        metaDescription = "";
        break;
      case "/home-device-1-test-running":
        title = "";
        metaDescription = "";
        break;
      case "/home-device-5-connected-ready":
        title = "";
        metaDescription = "";
        break;
      case "/hb-variant-patient-info":
        title = "";
        metaDescription = "";
        break;
      case "/covid19-patient-info":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-patient-info":
        title = "";
        metaDescription = "";
        break;
      case "/covid19-confirm-patient-info":
        title = "";
        metaDescription = "";
        break;
      case "/add-reader-5-device":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route
        path="/home-device-1-select-test"
        element={<HomeDevice5SelectTest />}
      />
      <Route path="/loginuid-pwd" element={<LoginUIDPWD />} />
      <Route path="/frame-1" element={<Home />} />
      <Route path="/add-reader" element={<AddReader1Device />} />
      <Route
        path="/add-reader-connecting"
        element={<AddReaderConnecting1Dev />}
      />
      <Route
        path="/add-reader-connected-1-device"
        element={<AddReaderConnected1Device />}
      />
      <Route
        path="/home-device-1-connected-ready"
        element={<HomeDevice1ConnectedReady />}
      />
      <Route
        path="/mix-blood-and-marker-fluid-a"
        element={<MixBloodAndMarkerFluidA />}
      />
      <Route
        path="/covid19-prepare-sample"
        element={<Covid19PrepareSampleDevic />}
      />
      <Route path="/covid19-test" element={<Covid19TestDevice />} />
      <Route
        path="/covid19-test-result-device-1"
        element={<Covid19TestResultDevice />}
      />
      <Route
        path="/mix-blood-and-marker-fluid-b"
        element={<MixBloodAndMarkerFluidB />}
      />
      <Route path="/wet-paper-a" element={<WetPaperADevice />} />
      <Route path="/wet-paper-b" element={<WetPaperBDevice />} />
      <Route
        path="/apply-sample-with-stamper"
        element={<ApplySampleWithStamperDev />}
      />
      <Route path="/fill-wells" element={<FillWellsDevice />} />
      <Route path="/hb-variant-running" element={<HbVariantRunningDevice />} />
      <Route
        path="/hb-variant-summary-test-results-a-device-1"
        element={<HbVariantSummaryTestResult />}
      />
      <Route
        path="/home-device-1-test-running"
        element={<HomeDevice1TestRunning />}
      />
      <Route
        path="/home-device-5-connected-ready"
        element={<HomeDevice5ConnectedReady />}
      />
      <Route
        path="/hb-variant-patient-info"
        element={<HbVariantPatientInfo />}
      />
      <Route path="/covid19-patient-info" element={<Covid19PatientInfo />} />
      <Route path="/confirm-patient-info" element={<ConfirmPatientInfo />} />
      <Route
        path="/covid19-confirm-patient-info"
        element={<Covid19ConfirmPatientInfo />}
      />
      <Route path="/add-reader-5-device" element={<AddReader5Device />} />
    </Routes>
  );
}
export default App;
