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
import DefaultProfileImage from "../../../assets/image/common/defaultProfile.png";

const NavBar = () => {
  const { data: serverMyMemberData, isLoading: serverMyMemberIsLoading } =
    useGetMyMember();

  return (
    <NavBarContainer>
      <NavBarLogo src={Logo} />
      <NavBarProfileWrap>
        {!serverMyMemberIsLoading && serverMyMemberData && (
          <>
            <NavBarProfile
              src={
                serverMyMemberData?.data?.member.profileImage! ||
                DefaultProfileImage
              }
            />
            <NavBarName>{serverMyMemberData?.data?.member.name}</NavBarName>
            <NavBarClassroom>
              {dataTransform.classRoomTransform(
                serverMyMemberData?.data?.classroom!,
                serverMyMemberData?.data?.number!
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
