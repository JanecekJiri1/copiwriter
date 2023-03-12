import React from "react";
import AboutP from "./AboutPhone";
import IntroPagePhone from "./IntroPagePhone";
import ContactPage from "./ContactPagePhone";
import PricePhone from "./PricePhone";

function PhoneVersion(props) {
  return (
    <>
      <div className="phoneVersionStyle">
        <IntroPagePhone />
        <AboutP />
        <PricePhone />
        <ContactPage />
      </div>
    </>
  );
}

export default PhoneVersion;
