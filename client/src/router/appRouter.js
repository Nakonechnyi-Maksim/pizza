import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage.js";
import PromoPage from "../pages/promoPage.js";
import LocationPage from "../pages/locationPage.js";
import ContactPage from "../pages/contactPage.js";
import AboutUsPage from "../pages/aboutUsPage.js";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/promo/" element={<PromoPage />} />
        <Route path="/location/" element={<LocationPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/aboutUs/" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
