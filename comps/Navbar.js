import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const handleClick = (e) => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#" className="active" onClick={handleClick}>
        Translate
      </a>
      <a href="#" className="logo" onClick={handleClick}>
        <Image src="/3po.png" width={64} height={64} />
      </a>
      <div id="myLinks">
        <Link href="/">
          <a onClick={myFunction}>Home</a>
        </Link>
        <Link href="/about">
          <a onClick={myFunction}>About</a>
        </Link>
        <Link href="/people">
          <a onClick={myFunction}>People</a>
        </Link>
        <Link href="/starships">
          <a onClick={myFunction}>Starships</a>
        </Link>
        <Link href="/vehicles">
          <a onClick={myFunction}>Vehicles</a>
        </Link>
      </div>
      <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Navbar;
