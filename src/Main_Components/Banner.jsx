import Avatar from "../movies/Avatar.jpg"
import Profile from "../directors/Profile.jpg"

const Banner = () => {
  return (
    <div className="Banner">
      <div id="toplayer">
      <div type="button" class="btn btn-outline-secondary" id="back">
      <p>&lt;</p>
      </div>
      <i class="bi bi-search"></i>
      <input type="search" id="search" placeholder="  &#128269; Search"/>
      
      <input type="button" className="Banner-Button" id="notification" value="&hearts;"/>
      <div className="Banner-Button" id="profile" >
        <img src={Profile} alt="" />
      </div>
      </div>
      <img
        src={Avatar}
        alt=""
      />
      <button type="button" class="btn btn-danger">Watch</button>
    </div>
  );
};

export default Banner;
