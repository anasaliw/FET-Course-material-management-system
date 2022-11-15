import React from "react";
import NavBar from "./NavBar";
import TitleSection from "./TitleSection";

function NavBarParent() {
  return (
    <div>
      <TitleSection />
      <NavBar />
    </div>
  );
}

export default NavBarParent;
