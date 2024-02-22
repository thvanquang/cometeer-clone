import React from "react";
import classes from "./BackgroundWave.module.css";
const BackgroundWave = ({ children }) => {
  return (
    <div className={classes.bgWave}>
      {children}
      <svg className="h-0 w-0">
        <defs>
          <clipPath
            id="wave"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.000694444444444, 0.00125)"
          >
            <path d="M131.343,748.244C66.388,748.244 16.716,732.144 0,724.093L0,0L1440,0L1440,724.093C1259.7,796.549 1190.45,724.093 1065.07,724.093C939.701,724.093 894.328,800 706.866,800C519.403,800 442.985,724.093 351.045,724.093C259.105,724.093 212.538,748.244 131.343,748.244Z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundWave;
