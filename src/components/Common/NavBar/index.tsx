import { useGetMyMember } from "../../../quries/member/member.query";
import { NavBarContainer, NavBarName, NavBarProfile } from "./style";

const NavBar = () => {
  const { data, isLoading: myMemberIsLoading } = useGetMyMember();

  return (
    <NavBarContainer>
      {!myMemberIsLoading && (
        <>
          <NavBarProfile src={data?.data.member.profileImage!} />
          <NavBarName>{data?.data.member.name}</NavBarName>
        </>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
