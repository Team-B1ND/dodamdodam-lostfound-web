import { useLocation, useNavigate } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../../../constants/common/common.constant";
import { NavBarTabContaienr, NavBarTabItem } from "./style";

const NavBarTab = () => {
  const { pathname } = useLocation();

  const currentPath = `/${pathname.split("/")[1]}`;
  const navigate = useNavigate();

  return (
    <NavBarTabContaienr>
      {NAVBAR_ITEMS.map((item) => (
        <NavBarTabItem
          isSelect={item.link === currentPath}
          onClick={() => navigate(item.link)}
          key={item.title}
        >
          {item.title}
        </NavBarTabItem>
      ))}
    </NavBarTabContaienr>
  );
};

export default NavBarTab;
