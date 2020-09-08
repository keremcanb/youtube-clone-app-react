import React, { useState } from "react";
import { BallBeat } from "react-pure-loaders";

const Spinner = (props) => {
  const [loading] = useState(true);
  return (
    <div>
      <BallBeat color="#123abc" loading={loading} />
    </div>
  );
};

export default Spinner;
