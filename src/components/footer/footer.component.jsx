import React from "react";
// import{ useEffect }from "react";
import "./footer.style.css";

// import Aos from "aos";
// import "aos/dist/aos.css";

const FooterPanel = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 });
  // }, []);
  return (
    <div>
      <div className="py-2 text-center footer-style">© FRANCIS CRUZ &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;