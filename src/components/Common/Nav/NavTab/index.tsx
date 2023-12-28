import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../../../constants/common/common.constant";
import { usePostModuleLog } from "../../../../quries/log/log.query";
import { NavTabContaienr, NavTabItem } from "./style";

const NavTab = () => {
  const { pathname } = useLocation();

  const currentPath = `/${pathname.split("/")[1]}`;
  const navigate = useNavigate();
  const postModuleLogMutation = usePostModuleLog();

  return (
    <NavTabContaienr>
      {NAV_ITEMS.map((item) => (
        <NavTabItem
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
        </NavTabItem>
      ))}
    </NavTabContaienr>
  );
};

export default NavTab;
