import { useState, useEffect } from "react";
import Suggestions from "./suggestion";
const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterUser, setFilterUser] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length >= 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
  }
  async function fetchUsers() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setLoading(true);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setError(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users, filterUser);
  return (
    <div className="search-auto-complete">
      {loading ? (
        <h1>Loading Data</h1>
      ) : (
        <input
          value={searchParam}
          onChange={handleChange}
          type="text"
          placeholder="Search Users here"
        />
      )}
      {showDropdown ? (
        <Suggestions handleClick={handleClick} data={filterUser} />
      ) : null}
    </div>
  );
};

export default SearchAutoComplete;
