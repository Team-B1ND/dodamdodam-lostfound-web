import { LostFoundPreview } from "../../../types/lostfound/lostfound.type";
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
import { useNavigate } from "react-router-dom";

interface Props {
  data: LostFoundPreview;
}

const HomeItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <HomeItemContainer onClick={() => navigate(`/detail/${data.id}`)}>
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
