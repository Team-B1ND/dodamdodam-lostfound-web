import { LostFoundPreview } from "../../../types/lostfound/lostfound.type";
import { MyLostFoundItemContainer, MyLostFoundItemImg } from "./style";

interface Props {
  data: LostFoundPreview;
}

const MyLostFoundItem = ({ data }: Props) => {
  return (
    <MyLostFoundItemContainer>
      <MyLostFoundItemImg src={data.image} />
    </MyLostFoundItemContainer>
  );
};

export default MyLostFoundItem;
