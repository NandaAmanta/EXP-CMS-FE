import React, { useState } from "react";
import Chart from "../Chart/Chart"
import "./CardList.scss";


function CardList() {
   

  return (
    <>
      <div className="top_dashboard mt-6 mb-6">
        <h1 className="text-3xl font-bold ">Tools Have Been Made</h1>
      </div>
      <div className="dashboard lg:flex ">
        <div className="dashboard__card_list lg:shrink-0 max-w-md rounded-xl md:max-w-2xl">
          <div className="card rounded-xl md:h-231 md:w-151">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools">
            <p>+ add new tool</p>
          </div>
        </div>

        <div className="dashboard__card_list lg:shrink-0 max-w-md rounded-xl  md:max-w-2xl">
          <div className="card rounded-xl md:h-231 md:w-151">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools">
            <p>+ add new tool</p>
          </div>
        </div>

        <div className="dashboard__card_list lg:shrink-0 max-w-md rounded-xl  md:max-w-2xl">
          <div className="card rounded-xl md:h-231 md:w-151">
            <div className="card__card_total">
              <p>Total</p>
              <p>11</p>
            </div>
            <div className="card__card_footer">
              <p>Navbar</p>
            </div>
          </div>
          <div className="dashboard__add_tools">
            <p>+ add new tool</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardList;
