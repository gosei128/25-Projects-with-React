import { useEffect, useState } from "react";
import User from "./user";
const GithubFinder = () => {
  const [username, setUsername] = useState("gosei128");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUser() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      console.log(data);
      if (data) {
        setUserData(data);
        setLoading(false);
        setUsername("");
      }
    } catch (e) {
      console.log(e);
    }
  }
  function handleClick() {
    fetchUser();
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Github User"
          name="search-by-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
        {loading ? <div> Searching user... </div> : null}
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubFinder;
