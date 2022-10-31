import { useGetMyMember } from "../../../quries/member/member.query";
import dataTransform from "../../../utils/transform/dataTransform";
import NavBarTab from "./NavBarTab";
import {
  NavBarClassroom,
  NavBarContainer,
  NavBarLogo,
  NavBarName,
  NavBarProfile,
  NavBarProfileWrap,
} from "./style";
import Logo from "../../../assets/logo/logo.svg";

const NavBar = () => {
  const { data, isLoading: myMemberIsLoading } = useGetMyMember();

  return (
    <NavBarContainer>
      <NavBarLogo src={Logo} />
      <NavBarProfileWrap>
        {!myMemberIsLoading && (
          <>
            <NavBarProfile src={data?.data.member.profileImage!} />
            <NavBarName>{data?.data.member.name}</NavBarName>
            <NavBarClassroom>
              {dataTransform.classRoomTransform(
                data?.data.classroom!,
                data?.data.number!
              )}
            </NavBarClassroom>
          </>
        )}
      </NavBarProfileWrap>
      <NavBarTab />
    </NavBarContainer>
  );
};

export default NavBar;
