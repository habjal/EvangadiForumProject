import React from "react";
import { Routes, Route } from "react-router-dom";
import Terms from "../components/Footer/Terms";
import QuestionAndAnswer from "../Pages/QuestionAndAnswer/QuestionAndAnswer";
import AskQuestion from "../Pages/Question/AskQuestion/AskQuestion";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Home from "../Pages/Home/Home";
import AuthLayout from '../Pages/AuthLayout/AuthLayout'
import HowItWorks from "../pages/Howitworks/HowItWorks";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:questionId" element={<QuestionAndAnswer />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/forgetPass" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
