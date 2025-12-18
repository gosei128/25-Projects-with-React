const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((user, i) => (
            <li key={i} onClick={handleClick}>
              {user}
            </li>
          ))
        : null}
    </ul>
  );
};
export default Suggestions;
