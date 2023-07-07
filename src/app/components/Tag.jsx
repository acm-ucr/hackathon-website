import React from "react";

const Tag = ({ text, backgroundColor, textColor, onClick }) => {
  let style = "";
  if (text == "Rejected" || text == "Pending" || text == "Accepted") {
    style = `bg-${backgroundColor} text-${textColor} px-1.5 rounded`;
  } else {
    style = `bg-${backgroundColor} text-${textColor} px-1.5 rounded-full`;
  }
  return (
    <>
      <div className={style} onClick={onClick}>
        {text}
      </div>
    </>
  );
};

export default Tag;
