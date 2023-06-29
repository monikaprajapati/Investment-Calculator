import * as React from "react";
import classes from './Fallback.module.css';

const Fallback: React.FC<any> = () => {
  return <div className={classes.fallback}>No data found</div>;
};

export default Fallback;
