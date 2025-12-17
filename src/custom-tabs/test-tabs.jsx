import Tabs from "./tabs";

function RandomContent() {
  return <div>this is content 3</div>;
}
const tabs = [
  {
    label: "Tabs 1",
    content: <div>This is content tab 1</div>,
  },
  {
    label: "Tabs 2",
    content: <div>This is content tab 2</div>,
  },
  {
    label: "Tabs 3",
    content: <RandomContent />,
  },
];

function handleChange(currentTabIndex) {
  console.log(currentTabIndex);
}

const Test = () => {
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default Test;
