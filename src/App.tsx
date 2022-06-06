import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecentlyViewedTrips } from "./components/recently-viewed-trips/recently-viewed-trips";

function App() {
  return (
    <div className="App">
      <RecentlyViewedTrips />
      <ToastContainer />
    </div>
  );
}

export default App;
