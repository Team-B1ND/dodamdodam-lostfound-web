import { useGetMyMember } from "../../../quries/member/member.query";
import dataTransform from "../../../utils/transform/dataTransform";
import NavTab from "./NavTab";
import * as S from "./style";
import Logo from "../../../assets/logo/logo.svg";
import DefaultProfileImage from "../../../assets/image/common/defaultProfile.png";

const Nav = () => {
  const { data: serverMyMemberData, isLoading: serverMyMemberIsLoading } =
    useGetMyMember();

  return (
    <S.NavContainer>
      <S.NavLogo
        src={Logo}
        onClick={() => (window.location.href = "http://dodam.b1nd.com/")}
      />
      <S.NavProfileWrap>
        {!serverMyMemberIsLoading && serverMyMemberData && (
          <>
            <S.NavProfile
              src={
                serverMyMemberData?.data?.member.profileImage! ||
                DefaultProfileImage
              }
            />
            <S.NavName>{serverMyMemberData?.data?.member.name}</S.NavName>
            <S.NavClassroom>
              {dataTransform.classRoomTransform(
                serverMyMemberData?.data?.classroom!,
                serverMyMemberData?.data?.number!
              )}
            </S.NavClassroom>
          </>
        )}
      </S.NavProfileWrap>
      <NavTab />
    </S.NavContainer>
  );
};

export default Nav;
