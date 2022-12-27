import React from "react";
import BookRetuuringFligh from "pages/BookRetuuringFligh";
import PaymentwithData from "pages/PaymentwithData";
import CreditCardPayment from "pages/CreditCardPayment";
import SeatSpecification from "pages/SeatSpecification";
import UpgradSeat from "pages/UpgradSeat";
import SeatSelection2 from "pages/SeatSelection2";
import SeatSelection1 from "pages/SeatSelection1";
import SeatSelection from "pages/SeatSelection";
import PassengerInfoData from "pages/PassengerInfoData";
import PassengerInfo from "pages/PassengerInfo";
import ReturningFlightSel from "pages/ReturningFlightSel";
import ReturningFlightsoptions from "pages/ReturningFlightsoptions";
import HoverReturningFlt from "pages/HoverReturningFlt";
import ReturningFltview from "pages/ReturningFltview";
import NoofPeople from "pages/NoofPeople";
import Dateselect from "pages/Dateselect";
import CalenderPOP from "pages/CalenderPOP";
import ToPOP from "pages/ToPOP";
import FromDropdown from "pages/FromDropdown";
import IntroPage from "pages/IntroPage";
import SignUp from "pages/SignUp";
import Cookies from "pages/Cookies";
import StartPage from "pages/StartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/startpage" element={<StartPage />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/intropage" element={<IntroPage />} />
        <Route path="/fromdropdown" element={<FromDropdown />} />
        <Route path="/topop" element={<ToPOP />} />
        <Route path="/calenderpop" element={<CalenderPOP />} />
        <Route path="/dateselect" element={<Dateselect />} />
        <Route path="/noofpeople" element={<NoofPeople />} />
        <Route path="/returningfltview" element={<ReturningFltview />} />
        <Route path="/hoverreturningflt" element={<HoverReturningFlt />} />
        <Route
          path="/returningflightsoptions"
          element={<ReturningFlightsoptions />}
        />
        <Route path="/returningflightsel" element={<ReturningFlightSel />} />
        <Route path="/passengerinfo" element={<PassengerInfo />} />
        <Route path="/passengerinfodata" element={<PassengerInfoData />} />
        <Route path="/seatselection" element={<SeatSelection />} />
        <Route path="/seatselection1" element={<SeatSelection1 />} />
        <Route path="/seatselection2" element={<SeatSelection2 />} />
        <Route path="/upgradseat" element={<UpgradSeat />} />
        <Route path="/seatspecification" element={<SeatSpecification />} />
        <Route path="/creditcardpayment" element={<CreditCardPayment />} />
        <Route path="/paymentwithdata" element={<PaymentwithData />} />
        <Route path="/bookretuuringfligh" element={<BookRetuuringFligh />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
