import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);

      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.error(e.message);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(data, loading);
  return (
    <div>
      <h1>Scroll Indicator</h1>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
