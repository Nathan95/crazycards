import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import {
  studentPayload,
  liquidCardPayload,
  anywhereCardPayload
} from "../data/cardData";

const Cardlist = ({ incomeData, employmentData }) => {
  const [checkCredit, setCheckCredit] = useState([]);

  let payloads = [anywhereCardPayload];

  if (employmentData === "student") {
    payloads.push(studentPayload);
  }

  if (incomeData > 15000) {
    payloads.push(liquidCardPayload);
  }

  function handleAdd(val) {
    if (!checkCredit.includes(val)) {
      setCheckCredit([...checkCredit, val]);
    } else if (checkCredit.includes(val)) {
      const i = checkCredit.indexOf(val);
      if (i > -1) {
        const newCheckCredit = [...checkCredit];
        newCheckCredit.splice(i, 1);
        setCheckCredit(newCheckCredit);
      }
    }
  }

  function addCredit(reduceVals) {
    return reduceVals.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  }

  return (
    <React.Fragment>
      {payloads.map(detail => (
        <Card
          key={detail.id}
          id={detail.creditAvailable}
          title={detail.title}
          apr={detail.apr}
          onClick={() => handleAdd(detail.creditAvailable)}
          balanceOfferDuration={detail.balanceOfferDuration}
          purchaseOfferDuration={detail.purchaseOfferDuration}
          creditAvailable={detail.creditAvailable}
        />
      ))}
      <div tabIndex={0}>Total Credit: £{addCredit(checkCredit)}</div>
    </React.Fragment>
  );
};

Cardlist.propTypes = {
  incomeData: PropTypes.string.isRequired,
  employmentData: PropTypes.string.isRequired
};

export default Cardlist;
