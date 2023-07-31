import React, { useState } from "react";
import Chart from "../Chart/Chart"
import "./CardList.scss";


function CardList() {
   

  return (
    <>
      <div className="top_dashboard mt-6 mb-6">
        <h1 className="text-3xl font-bold ">Tools Have Been Made</h1>
      </div>
      <div className="dashboard lg:flex">
        <div className="dashboard__card_list flex-none lg:h-56 md:h-60 w-32 md:w-48 sm:w-48">
          <div className="card ">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer relative lg:top-14 md:top-8 sm:top-11">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools top-12 relative text-center font-normal text-sm">
            <p>+ add new tool</p>
          </div>
        </div>

        <div className="dashboard__card_list flex-none lg:h-56 md:h-60 w-32 md:w-48  sm:w-48">
          <div className="card ">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer relative lg:top-14 md:top-8 sm:top-11">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools top-12 relative text-center font-normal text-sm">
            <p>+ add new tool</p>
          </div>
        </div>

        <div className="dashboard__card_list flex-none lg:h-56 md:h-60 w-32 md:w-48  sm:w-48">
          <div className="card ">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer relative lg:top-14 md:top-8 sm:top-11">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools top-12 relative text-center font-normal text-sm">
            <p>+ add new tool</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardList;
