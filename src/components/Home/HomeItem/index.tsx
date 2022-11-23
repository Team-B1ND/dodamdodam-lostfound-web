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
import { usePostModuleLog } from "../../../quries/log/log.query";

interface Props {
  data: LostFoundPreview;
}

const HomeItem = ({ data }: Props) => {
  const navigate = useNavigate();
  const postModuleLogMutation = usePostModuleLog();

  const redirect = () => {
    navigate(`/detail/${data.id}`);
    postModuleLogMutation.mutate({
      description: "분실물/습득물 단일 조회",
      moduleName: "분실물/습득물 단일 조회",
    });
  };

  return (
    <HomeItemContainer onClick={redirect}>
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
