import React, { useState } from "react";
import Chart from "../Chart/Chart"
import "./CardList.scss";

interface DropdownSelection {
  selectedYear: string;
}

function CardList() {
    const [state, setState] = useState<DropdownSelection>({
      selectedYear: "This Year", // Initial selected year
    });

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedYear = event.target.value;
      setState((prevState) => ({
        ...prevState,
        selectedYear: selectedYear,
      }));
    };

  return (
    <>
      <div className="top_dashboard">
        <h1>Tools Have Been Made</h1>
      </div>
      <div className="dashboard">
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

      <div className="top_overview">
        <h1>Overview</h1>
      </div>
      <div className="overview">
        <div className="overview__text_chart">
          <span>Activity</span>
          <select value={state.selectedYear} onChange={handleYearChange}>
            <option value="This Year">This Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            {/* Add more years as needed */}
          </select>
        </div>
        <div className="overview__chart">
          {/* <Chart year={state.selectedYear} /> */}
          <Chart />
        </div>
        <div className="overview__total_used">
          <div className="text_total">
            <span>150</span>
            <span>Tools</span>
          </div>
          <div className="text_total">
            <span>21k</span>
            <span>Activity</span>
          </div>
          <div className="text_total">
            <span>20</span>
            <span>Used</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardList;
