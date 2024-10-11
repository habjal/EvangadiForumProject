import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from "../Pages/Howitworks/HowItWorks";
import Terms from "../components/Footer/Terms";
import PrivacyPolicy from "../Pages/privacy-policy/Privacy-police";
import QuestionAndAnswer from "../Pages/QuestionAndAnswer/QuestionAndAnswer";
import AuthLayout from "../Pages/AuthLayout/AuthLayout";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import AskQuestion from "../Pages/Question/AskQuestion/AskQuestion";
import Home from '../Pages/Home/Home'
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
