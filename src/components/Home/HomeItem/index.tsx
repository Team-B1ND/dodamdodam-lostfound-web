import { LostFound } from "../../../types/lostfound/lostfound.type";
import {
  HomeItemContainer,
  HomeItemContentAuthor,
  HomeItemContentBottomWrap,
  HomeItemContentCreatedAt,
  HomeItemContentWrap,
  HomeItemImg,
  HomeItemTitle,
} from "./style";
import NoImage from "../../../assets/image/common/noImage.svg";
import TimeCounting from "time-counting";

interface Props {
  data: LostFound;
}

const HomeItem = ({ data }: Props) => {
  return (
    <HomeItemContainer>
      <HomeItemImg src={data.image || NoImage} key={data.id} />
      <HomeItemContentWrap>
        <HomeItemTitle>{data.title}</HomeItemTitle>
        <HomeItemContentBottomWrap>
          <HomeItemContentAuthor>{data.member.name}</HomeItemContentAuthor>
          <HomeItemContentCreatedAt>
            {TimeCounting(data.createAt, { lang: "ko" })}
          </HomeItemContentCreatedAt>
        </HomeItemContentBottomWrap>
      </HomeItemContentWrap>
    </HomeItemContainer>
  );
};

export default HomeItem;
