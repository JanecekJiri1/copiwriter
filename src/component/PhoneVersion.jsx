import React from "react";
import IntroPagePhone from "./BasicSlader/IntroPagePhone";
import AboutPhone from "./BasicSlader/AboutPhone";
import PricePhone from "./BasicSlader/PricePhone";
import ContactPagePhone from "./BasicSlader/ContactPagePhone";
import Referenc from "./BasicSlader/Referenc";

function PhoneVersion(props) {
  return (
    <div className="phoneVersionStyle">
      <IntroPagePhone />
      <AboutPhone />
      <PricePhone />
      <ContactPagePhone />
    </div>
  );
}

export default PhoneVersion;
