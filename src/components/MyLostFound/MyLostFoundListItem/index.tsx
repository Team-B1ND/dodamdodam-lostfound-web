import { LostFoundPreview } from "../../../types/lostfound/lostfound.type";
import * as S from "./style";
import NoImage from "../../../assets/image/common/noImage.svg";
import { palette } from "../../../styles/palettes";
import dataTransform from "../../../utils/transform/dataTransform";
import MyLostFoundItemMenuDropdown from "./MyLostFoundItemMenuDropdown";
import { useNavigate } from "react-router-dom";
import useDeleteLostFound from "../../../hooks/lostFound/useDeleteLostFound";
import Spinner from "../../Common/Spinner/Spinner";
import { usePostModuleLog } from "../../../quries/log/log.query";

interface Props {
  data: LostFoundPreview;
}

const MyLostFoundItem = ({ data }: Props) => {
  const navigate = useNavigate();

  const { onDeleteLostFound, isDeleting } = useDeleteLostFound();
  const postModuleLogMutation = usePostModuleLog();
  const redirect = () => {
    navigate(`/detail/${data.id}`);
    postModuleLogMutation.mutate({
      description: "분실물/습득물 단일 조회",
      moduleName: "분실물/습득물 단일 조회",
    });
  };

  return (
    <>
      <Spinner isAbsolute isLoading={isDeleting} />
      <S.MyLostFoundItemContainer onClick={redirect}>
        <S.MyLostFoundItemImg src={data.image || NoImage} />
        <S.MyLostFoundItemMiddleWrap>
          <S.MyLostFoundItemInfoWrap>
            <S.MyLostFoundItemTitle>{data.title}</S.MyLostFoundItemTitle>
            <div>
              <S.MyLostFoundItemPlace>
                위치 : {data.place}
              </S.MyLostFoundItemPlace>
              <S.MyLostFoundItemCreatedAt>
                작성일 : {data.createAt.slice(0, 10)}
              </S.MyLostFoundItemCreatedAt>
            </div>
            <S.MyLostFoundItemTag
              backgroundColor={
                data.type === "FOUND" ? palette.main : palette.sub
              }
            >
              # {dataTransform.lostFoundTypeTransform(data.type)}
            </S.MyLostFoundItemTag>
          </S.MyLostFoundItemInfoWrap>
          <MyLostFoundItemMenuDropdown
            onDeleteLostFound={onDeleteLostFound}
            lostFoundId={data.id}
            lostFoundType={data.type}
          />
        </S.MyLostFoundItemMiddleWrap>
      </S.MyLostFoundItemContainer>
    </>
  );
};

export default MyLostFoundItem;
