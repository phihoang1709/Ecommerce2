import { Link } from "react-router-dom";
// import { useMemo } from "react";
const Logo = () => {
  return (
    <Link to={"/"} className="navbar-brand">
          <img style={{width:"5.5rem"}} className="" src="/src/assets/logo.png" alt="" />
    </Link>
  );
};
export default Logo;
