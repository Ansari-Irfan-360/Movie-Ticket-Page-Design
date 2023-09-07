import Cards from "./Cards";
import avenger from "../movies/Avengers.jpg";
import kgf from "../movies/KGF.jpg";
import pathaan from "../movies/Pathaan.jpg";
import spiderman from "../movies/Spider-man no way home.jpg";
import lockdown from "../movies/The lockdown.jpg";
import Aladdin from "../movies/Aladdin.jpg";
import P1 from "../directors/P1.jpg"
import P2 from "../directors/P2.jpg"
import P3 from "../directors/P3.jpg"
import P4 from "../directors/P4.jpg"
import P5 from "../directors/P5.jpg"
import P6 from "../directors/P6.jpg"



const Movies = () => {
  return (
    <div className="Movies">
      <h3>Continue Watching</h3>
      <select id="list" className="btn btn-secondary dropdown-toggle" name="list">
        <option value="Popular">Popular</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="Rated">Rated</option>
      </select>
      <div className="displayMovies">
      <Cards
        link={avenger}
        producer={P1}
        title="Avengers"
        desc = "Infinity War"
        name="Mared Ade"
      /><Cards
        link={kgf}
        producer={P2}
        title="KGF"
        desc = "KGF 1"
        name="Carne Aldie"
      /><Cards
        link={pathaan}
        producer={P3}
        title="Pathaan"
        desc = "Avenger"
        name="Adam Akhir"
      />
      <Cards
        link={spiderman}
        producer={P4}
        title="Sipder-man"
        desc = "Homecoming"
        name="Jhon Willan"
      />
      <Cards
        link={lockdown}
        producer={P5}
        title="Lockdown"
        desc = "Sirvival"
        name="Dev Anand"
      />
      <Cards
        link={Aladdin}
        producer={P6}
        title="Aladdin"
        desc = "Aladdin 1"
        name="Ari Aster"
      />
      
      </div>
      
    </div>
  );
};

export default Movies;
