import React from "react";
import clsx from "clsx";
import "./SlideDown.scss"

const SlideDown = ({ children, show }) => {
  return <div className={clsx({'show': show, 'hide': !show })} >{children}</div>;
};

export default SlideDown;
