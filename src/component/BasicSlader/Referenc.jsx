import React from "react";
import { Link } from "react-router-dom";

function Referenc(props) {
  return (
    <>
      <div className="reference">
        <h2>Reference1</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt architecto esse,
          consequatur sapiente sequi provident facere delectus expedita facilis totam dolore tempore
          qui. Unde, exercitationem asperiores architecto quasi modi facilis aperiam ipsum atque
          blanditiis repellat vero ipsam tempore temporibus rerum, aliquam, tempora consectetur
          ratione repellendus eos illo iusto quidem sed ipsa! Sint modi dolore explicabo, libero
          delectus, officia molestiae debitis earum repellat pariatur ea deleniti?
        </p>
        <h2>reference2</h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi autem architecto tempore
        culpa fuga, esse, neque explicabo ipsa debitis earum repellendus iusto corrupti nemo est ab
        exercitationem reiciendis, rerum saepe!
      </div>
      <Link to="/">
        <button className="click-away--button returnButton--gallery">Zpět na hlavní stránku</button>
      </Link>
    </>
  );
}

export default Referenc;
