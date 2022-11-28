import { useLocation, useNavigate } from "react-router-dom";
import { NAVBAR_ITEMS } from "../../../../constants/common/common.constant";
import { usePostModuleLog } from "../../../../quries/log/log.query";
import { NavBarTabContaienr, NavBarTabItem } from "./style";

const NavBarTab = () => {
  const { pathname } = useLocation();

  const currentPath = `/${pathname.split("/")[1]}`;
  const navigate = useNavigate();
  const postModuleLogMutation = usePostModuleLog();

  return (
    <NavBarTabContaienr>
      {NAVBAR_ITEMS.map((item) => (
        <NavBarTabItem
          isSelect={item.link === currentPath}
          onClick={() => {
            navigate(item.link);
            postModuleLogMutation.mutate({
              description: `분실물 페이지에서 ${item.title}탭으로 이동`,
              moduleName: item.title,
            });
          }}
          key={item.title}
        >
          {item.title}
        </NavBarTabItem>
      ))}
    </NavBarTabContaienr>
  );
};

export default NavBarTab;
