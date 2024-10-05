import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from '../pages/Home/Home'
import AskQuestion from "../pages/Question/AskQuestion/AskQuestion";
import HowItWorks from "../pages/Howitworks/HowItWorks";
import Terms from '../components/Footer/Terms'
import Privacy from '../components/Footer/Privacy'
import QuestionAndAnswer from "../pages/QuestionAndAnswer/QuestionAndAnswer";

import Answer from "../pages/Answer/Answer";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ask" element={<AskQuestion/>}/>
                <Route path="/question/:questionId" element={<QuestionAndAnswer/>}/>
                <Route path='/howitworks' element={<HowItWorks/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="*" element={<Home/>}/>
                <Route path="/PrivacyPolicy" element={<Answer/>} />

            </Routes>
        </Router>
    
  );
}

export default AppRouter;
