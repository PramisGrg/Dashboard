import { CgProfile } from "react-icons/cg";
import { HiMiniUsers } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className=" h-screen flex flex-col">
      <div>
        <Link className="flex gap-2 pt-5 mb-10" to="/">
          <CgProfile />
          <span>Profile</span>
        </Link>
        <Link className="flex gap-2 mb-10" to="/Users">
          <HiMiniUsers />
          <span>Users</span>
        </Link>
        <Link className="flex gap-2 mb-10" to="/">
          <SiGoogleanalytics />
          <span>Analytics</span>
        </Link>
        <Link className="flex gap-2 mb-10" to="/">
          <RiMoneyDollarBoxLine />
          <span>Amount</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
