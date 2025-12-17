import { useState } from "react";
import "./style.css";
const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTab] = useState(0);

  function handleClick(getCurrentIndex) {
    setCurrentTab(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabsItem, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tabsItem.label}
          >
            <span className="label">{tabsItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
