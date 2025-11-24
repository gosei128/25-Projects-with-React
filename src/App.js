import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/Random-Color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

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
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"4"} page={'1'}/>
    </div>
  );
}

export default App;
