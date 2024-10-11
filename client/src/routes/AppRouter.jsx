import React from "react";
import { Routes, Route } from "react-router-dom";
import Terms from "../components/Footer/Terms";
import Home from '../pages/Home/Home'
import Howitworks from '../pages/Howitworks/HowItWorks'
import QuestionAndAnswer from "../pages/QuestionAndAnswer/QuestionAndAnswer";
import AskQuestion from "../pages/Question/AskQuestion/AskQuestion";
import AuthLayout from "../pages/AuthLayout/AuthLayout";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:questionId" element={<QuestionAndAnswer />} />
      <Route path="/howitworks" element={<Howitworks />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/forgetPass" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
