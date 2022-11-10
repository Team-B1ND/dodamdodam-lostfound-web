import { LostFoundPreview } from "../../../types/lostfound/lostfound.type";
import {
  MyLostFoundItemContainer,
  MyLostFoundItemCreatedAt,
  MyLostFoundItemImg,
  MyLostFoundItemInfoWrap,
  MyLostFoundItemMiddleWrap,
  MyLostFoundItemPlace,
  MyLostFoundItemTag,
  MyLostFoundItemTitle,
} from "./style";
import NoImage from "../../../assets/image/common/noImage.svg";
import { palette } from "../../../styles/palettes";
import dataTransform from "../../../utils/transform/dataTransform";
import MyLostFoundItemMenuDropdown from "./MyLostFoundItemMenuDropdown";
import { useNavigate } from "react-router-dom";

interface Props {
  data: LostFoundPreview;
}

const MyLostFoundItem = ({ data }: Props) => {
  const navigate = useNavigate();

  return (
    <MyLostFoundItemContainer onClick={() =>navigate(`/write/${data.id}`)}>
      <MyLostFoundItemImg src={data.image || NoImage} />
      <MyLostFoundItemMiddleWrap>
        <MyLostFoundItemInfoWrap>
          <MyLostFoundItemTitle>{data.title}</MyLostFoundItemTitle>
          <div>
            <MyLostFoundItemPlace>위치 : {data.place}</MyLostFoundItemPlace>
            <MyLostFoundItemCreatedAt>
              작성일 : {data.createAt.slice(0, 10)}
            </MyLostFoundItemCreatedAt>
          </div>
          <MyLostFoundItemTag
            backgroundColor={data.type === "FOUND" ? palette.main : palette.sub}
          >
            # {dataTransform.lostFoundTypeTransform(data.type)}
          </MyLostFoundItemTag>
        </MyLostFoundItemInfoWrap>
        <MyLostFoundItemMenuDropdown
          lostFoundId={data.id}
          onModify={() => {}}
        />
      </MyLostFoundItemMiddleWrap>
    </MyLostFoundItemContainer>
  );
};

export default MyLostFoundItem;
