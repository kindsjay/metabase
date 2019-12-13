import React from "react";

import { LegacySelect } from "metabase/components/Select";
import _ from "underscore";

const YEARS = _.range(new Date().getFullYear(), 1900, -1);

const YearPicker = ({ value, onChange }) => (
  <LegacySelect
    className="borderless"
    value={value}
    options={YEARS}
    optionNameFn={option => option}
    optionValueFn={option => option}
    onChange={onChange}
  />
);

export default YearPicker;
