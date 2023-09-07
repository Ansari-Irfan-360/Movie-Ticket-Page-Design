import Cards from "./Cards";

import GOTG from "../movies/GOTG.jpg";
import inception from "../movies/Inception.jpg";
import spiderman from "../movies/Spider-man no way home.jpg";
import avenger from "../movies/Avengers.jpg";
import Aladdin from "../movies/Aladdin.jpg";
import blackadam from "../movies/black_adam.jpeg";
import kgf from "../movies/KGF.jpg";
import pathaan from "../movies/Pathaan.jpg";
import oppenheimer from "../movies/Oppenheimer.jpg";
import lockdown from "../movies/The lockdown.jpg";

import P1 from "../directors/P1.jpg";
import P2 from "../directors/P2.jpg";
import P3 from "../directors/P3.jpg";
import P4 from "../directors/P4.jpg";
import P5 from "../directors/P5.jpg";
import P6 from "../directors/P6.jpg";
import P7 from "../directors/P7.jpg";
import P8 from "../directors/P8.jpg";
import P9 from "../directors/P9.jpg";
import P10 from "../directors/P10.jpg";

const Movies = () => {
  return (
    <div className="Movies2">
      <h3>New Releases</h3>
      <div className="displayMovies2">
        <Cards
          link={GOTG}
          producer={P1}
          title="GOTG"
          desc="GOTG 2"
          name="Pakr John"
        />
        <Cards
          link={inception}
          producer={P2}
          title="Inception"
          desc="The Dark Knight"
          name="Hammy Mei"
        />
        <Cards
          link={spiderman}
          producer={P3}
          title="Spider-man"
          desc="No way home"
          name="Ben Tenison"
        />
        <Cards
          link={avenger}
          producer={P4}
          title="Avenger"
          desc="Infinity War"
          name="Dev Anand"
        />
        <Cards
          link={Aladdin}
          producer={P5}
          title="Aladdin"
          desc="Aladdin 1"
          name="Ari Aster"
        />
      </div>
      <br />
      <div className="displayMovies2">
        <Cards
          link={blackadam}
          producer={P6}
          title="Black-Adam"
          desc="Black-Adam 2"
          name="Jhon Willan"
        />
        <Cards
          link={kgf}
          producer={P7}
          title="KGF"
          desc="KFG 2"
          name="Dev Anand"
        />
        <Cards
          link={pathaan}
          producer={P8}
          title="Pathaan"
          desc="Pathaan new"
          name="Adam Akhir"
        />
        <Cards
          link={oppenheimer}
          producer={P9}
          title="Oppenheimer"
          desc="Atomi Bomb"
          name="Mared Ade"
        />
        <Cards
          link={lockdown}
          producer={P10}
          title="Lockdown"
          desc="Sirvival"
          name="Carne Aldie"
        />
      </div>
    </div>
  );
};

export default Movies;
