import React from "react";
import Chart from "../Chart/Chart"
import "./CardList.scss";

function CardList() {
  return (
    <>
      <div className="top_dashboard">
        <h1>Tools Have Been Made</h1>
      </div>
      <div className="dashboard container">
        <div className="dashboard__card_list">
          <div className="card">
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

        <div className="dashboard__card_list">
          <div className="card">
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

        <div className="dashboard__card_list">
          <div className="card">
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

      <div className="overview">
      <div className="overview__chart">
        <Chart />
      </div>
      </div>

    </>
  );
}
export default CardList;
