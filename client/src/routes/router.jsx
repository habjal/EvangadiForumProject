import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import HowItWorks from "../Pages/Howitworks/HowItWorks.jsx";
import Terms from "../components/Footer/Terms.jsx";
import QuestionAndAnswer from "../Pages/QuestionAndAnswer/QuestionAndAnswer.jsx";
import AuthLayout from "../Pages/AuthLayout/AuthLayout.jsx";
import PageNotFound from "../Pages/PageNotFound/PageNotFound.jsx";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword.jsx";
import AskQuestion from "../Pages/Question/AskQuestion/AskQuestion.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ask" element={<AskQuestion />} />
      <Route path="/question/:questionId" element={<QuestionAndAnswer />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/forgetPass" element={<ForgotPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouter;
