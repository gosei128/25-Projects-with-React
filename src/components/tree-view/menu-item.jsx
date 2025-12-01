import { useState } from "react";
import MenuList from "./menu-list";

const MenuItems = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggle(getCurrentLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getCurrentLabel]: !displayChildren[getCurrentLabel],
    });
  }
  console.log(displayChildren);
  return (
    <li>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItems;
