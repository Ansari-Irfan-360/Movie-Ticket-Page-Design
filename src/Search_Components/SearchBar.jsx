import Profile from "../directors/Profile.jpg"

const SearchBar = () => {
  return (
    <div className="searchBar">
      <h4>Netflix</h4>
      <input type="text" placeholder="     Search" />
      <div className="Banner-Button" id="profile2">
        <img
          src={Profile}
          alt=""
        />
      </div>
    </div>
  );
};

export default SearchBar;
