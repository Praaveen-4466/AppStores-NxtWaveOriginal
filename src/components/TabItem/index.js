import React from "react";

import "./index.css";

const TabItem = (props) => {
  const { tabDetails, setActiveTabItem, isActive } = props;
  const { displayText, tabId } = tabDetails;

  const onClickTabItem = () => {
    setActiveTabItem(tabId);
  };

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";

  return (
    <li className="tab-container">
      <button
        className={tabBtnClassName}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
