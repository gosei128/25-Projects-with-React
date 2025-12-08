import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/Random-Color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkTheme from './components/dark-theme';
import ScrollIndicator from './components/scroll-indicator';

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
      {/* <TreeView menus={menus} /> */}
      {/* QR Code Generator */}
      {/* <QrCodeGenerator /> */}
      {/* Light / Dark Theme */}
      {/* <LightDarkTheme /> */}
      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
