import { useState, useEffect } from "react";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [backdBtn, setBackBtn] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    if (count === 0) {
      setBackBtn(true);
    } else {
      setBackBtn(false);
    }
  }, [count]);

  if (loading) {
    return <div>Loading data...</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((items) => (
              <div className="product-item" key={items.id}>
                <img src={items.thumbnail} alt="" />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count - 1)} disabled={backdBtn}>
          Back
        </button>
        <button onClick={() => setCount(count + 1)}>Next</button>
      </div>
    </div>
  );
};

export default LoadMore;
