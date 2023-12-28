import { LostFoundPreview } from "../../../../types/lostfound/lostfound.type";
import * as S from "./style";
import NoImage from "../../../../assets/image/common/noImage.svg";
import TimeCounting from "time-counting";
import { useNavigate } from "react-router-dom";
import { usePostModuleLog } from "../../../../quries/log/log.query";

interface Props {
  data: LostFoundPreview;
}

const HomeListItem = ({ data }: Props) => {
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
    <S.HomeItemContainer onClick={redirect}>
      <S.HomeItemImg src={data.image || NoImage} key={data.id} />

      <S.HomeItemContentWrap>
        <S.HomeItemTitle>{data.title}</S.HomeItemTitle>

        <S.HomeItemContentBottomWrap>
          <S.HomeItemContentAuthor>{data.member.name}</S.HomeItemContentAuthor>
          <S.HomeItemContentCreatedAt>
            {TimeCounting(data.createAt, { lang: "ko" })}
          </S.HomeItemContentCreatedAt>
        </S.HomeItemContentBottomWrap>
      </S.HomeItemContentWrap>
    </S.HomeItemContainer>
  );
};

export default HomeListItem;
