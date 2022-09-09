import React from "react";

import Logo from "./assests/img/logo.png";
import "./App.css";
import Page1 from "./pages/page1";
import { useEffect, useState } from "react";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import ProgressBar from "./components/progressBar/progressBar";

function App() {
  let [pageNo, setPage] = useState(1);


  const incrementPageNo = (current) => {

    if (current != 4)
      setPage((prev) => {
        let newPage = current + 1;
        return newPage;
      });
  };
  return (
    <div class="mainDiv">
      <div className="logo-parent">
        <img src={Logo} class="logo mt-20" />
      </div>


      {pageNo == 1 && (
        <>
          <ProgressBar currPage={0} />
          <Page1 onButtonClick={() => incrementPageNo(1)} />
        </>
      )}
      {pageNo == 2 && (
        <>
          <ProgressBar currPage={1} />
          <Page2 onButtonClick={() => incrementPageNo(2)} />
        </>
      )}
      {pageNo == 3 && (
        <>
          <ProgressBar currPage={2} />
          <Page3 onButtonClick={() => incrementPageNo(3)} />
        </>
      )}
      {pageNo == 4 && (
        <>
          <ProgressBar currPage={3} />
          <Page4 onButtonClick={() => incrementPageNo(4)} />
        </>
      )}


    </div>
  );
}

export default App;
