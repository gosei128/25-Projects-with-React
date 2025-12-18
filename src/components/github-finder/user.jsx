const User = ({ user }) => {
  const { avatar_url, followers, following, public_repos, name, login } = user;

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login} </a>
      </div>
    </div>
  );
};
export default User;
