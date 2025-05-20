import React from "react";
import SummaryItem from "./SummaryItem";
import { SUMMARY_DATA } from "../summaryData";

function Result() {
  return (
    <>
      <section className="result">
        <h1 className="result__title">Your Result</h1>
        <div className="result__score-circle">
          <strong className="result__score">76</strong>
          <span className="result__out-of">of 100</span>
        </div>
        <h2 className="result__comment">Great</h2>
        <p className="result__description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="summary">
        <h3 className="summary__title">Summary</h3>
        <ul className="summary__list">
          {SUMMARY_DATA.map((data, index) => (
            <SummaryItem key={index} {...data} />
          ))}
        </ul>
        <button className="summary__button">Continue</button>
      </section>
    </>
  );
}

export default Result;
