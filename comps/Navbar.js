import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const handleClick = (e) => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="#" className="active" onClick={handleClick}>
        Translate
      </a>
      <a href="#" className="logo" onClick={handleClick}>
        <Image src="/3po.png" width={64} height={64} />
      </a>
      <div id="myLinks">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/people">
          <a>People</a>
        </Link>
        <Link href="/starships">
          <a>Starships</a>
        </Link>
        <Link href="/vehicles">
          <a>Vehicles</a>
        </Link>
      </div>
      <a href="#" className="icon" onClick={myFunction}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Navbar;
