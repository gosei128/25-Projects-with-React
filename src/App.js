import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/Random-Color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Generator */}
      {/* <RandomColor /> */}
      {/* Star Rating */}
      {/* <StarRating noOfStar={5}/> */}
      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"4"} page={'1'}/> */}
      {/* LoadMoreData */}
      {/* <LoadMore /> */}
      {/* Tree view */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
