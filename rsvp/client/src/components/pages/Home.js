import React from "react";
import GuestForm from "../../components/guests/GuestForm";
import GuestCounter from "../guests/GuestCounter";
import GuestFilter from "../guests/GuestFilter";
import GuestSearch from "../guests/GuestSearch";
import Guests from "../guests/Guests";

function Home() {
  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
        <GuestFilter />
        <GuestSearch />
        </div>
        <GuestForm />
        <GuestCounter />
      </div>
      <Guests />
    </div>
  );
}
export default Home;
