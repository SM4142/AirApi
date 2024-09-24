import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia, faPlane, faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NavbarHome() {
  return (
    <div className="flex items-center justify-between mb-6 text-[18px] text-gray-700">
      <h1 className="font-bold text-[20px]">
        <span className="text-white rounded-2xl mr-2  pr-1 bg-[#4B0097] ">
          <FontAwesomeIcon icon={faPlane} />
        </span>
        Plane Scape
      </h1>
      <nav className="text-[14px]">
        <ul className="flex flex-row items-center gap-5">
          <li>
            <Link to="/">
              <span className="mr-1 text-[#4B0097]">
                <FontAwesomeIcon icon={faTag} />
              </span>
              Deals
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="mr-1 text-[#4B0097]">
                <FontAwesomeIcon icon={faEarthAsia} />
              </span>
              Discovery
            </Link>
          </li>
          <li>
            <Link to="/user" className="flex flex-row items-center">
              <img
                src="images/joanne-smith.jpg"
                className="rounded-3xl w-[40px] h-[35px] object-cover mr-1"
              />
              Joane Smith
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
