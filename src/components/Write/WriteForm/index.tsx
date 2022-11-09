import {
  WriteFormImg,
  WriteFormImgInputLabel,
  WriteFormImgInputLabelIcon,
  WriteFormImgInputLabelText,
  WriteFormImgWrap,
  WriteFormInputTitle,
  WriteFormInputWrap,
  WriteFormRowInputWrap,
  WriteFormSelectIcon,
  WriteFormSelectItem,
  WriteFormSelectItemWrap,
  WriteFormSelectWrap,
  WriteFormSubmitButton,
  WriteFormTextarea,
  WriteFormTextInput,
} from "./style";
import { MdPhotoCamera } from "@react-icons/all-files/md/MdPhotoCamera";
import useUploadLostFoundImage from "../../../hooks/lostFound/useUploadLostFoundImage";
import { useRecoilValue } from "recoil";
import { writeUploadLostFoundImageAtom } from "../../../store/write/write.store";
import Spinner from "../../Common/Spinner/Spinner";
import usePostLostFound from "../../../hooks/lostFound/usePostLostFound";
import dataTransform from "../../../utils/transform/dataTransform";
import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/common/useOutsideClick";
import { VscTriangleDown } from "@react-icons/all-files/vsc/VscTriangleDown";

const WriteForm = () => {
  const image = useRecoilValue(writeUploadLostFoundImageAtom);

  const {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    isUploading,
  } = useUploadLostFoundImage();

  const {
    postData,
    onChangePostDataText,
    setPostData,
    onSubmitPostData,
    isPosting,
  } = usePostLostFound();

  const [close, setClose] = useState(false);
  const selectInputContainer = useRef<HTMLDivElement | null>(null);

  useOutsideClick({ ref: selectInputContainer, setState: setClose });

  return (
    <>
      <WriteFormInputWrap>
        <WriteFormInputTitle>분실물 이미지</WriteFormInputTitle>
        {<Spinner isAbsolute isLoading={isUploading || isPosting} />}
        {image ? (
          <WriteFormImgWrap>
            <WriteFormImg src={image!} />
          </WriteFormImgWrap>
        ) : (
          <>
            <input type="file" id="writeImg" onChange={onChangeImage} />
            <WriteFormImgInputLabel
              htmlFor="writeImg"
              draggable={true}
              onDrop={dropHandler}
              onDragOver={dragHandler}
              onDragLeave={dragOutHandler}
              onDragEnter={dragInHandler}
            >
              <WriteFormImgInputLabelIcon>
                <MdPhotoCamera />
              </WriteFormImgInputLabelIcon>
              <WriteFormImgInputLabelText>
                이미지 등록
              </WriteFormImgInputLabelText>
            </WriteFormImgInputLabel>
          </>
        )}
      </WriteFormInputWrap>
      <WriteFormRowInputWrap>
        <WriteFormInputWrap>
          <WriteFormInputTitle>위치</WriteFormInputTitle>
          <WriteFormTextInput
            value={postData.place}
            placeholder="위치를 입력해주세요"
            onChange={onChangePostDataText}
            name="place"
          />
        </WriteFormInputWrap>
        <WriteFormInputWrap>
          <WriteFormInputTitle>구분</WriteFormInputTitle>

          <WriteFormSelectWrap
            ref={selectInputContainer}
            onClick={() => setClose((prev) => !prev)}
          >
            {dataTransform.lostFoundTypeTransform(postData.type)}
            <WriteFormSelectIcon close={close}>
              <VscTriangleDown />
            </WriteFormSelectIcon>
            {!close && (
              <WriteFormSelectItemWrap>
                <WriteFormSelectItem
                  onClick={() =>
                    setPostData((prev) => ({ ...prev, type: "LOST" }))
                  }
                >
                  분실물
                </WriteFormSelectItem>
                <WriteFormSelectItem
                  onClick={() =>
                    setPostData((prev) => ({ ...prev, type: "FOUND" }))
                  }
                >
                  습득물
                </WriteFormSelectItem>
              </WriteFormSelectItemWrap>
            )}
          </WriteFormSelectWrap>
        </WriteFormInputWrap>
      </WriteFormRowInputWrap>
      <WriteFormInputWrap>
        <WriteFormInputTitle>제목</WriteFormInputTitle>
        <WriteFormTextInput
          value={postData.title}
          placeholder="제목을 입력해주세요"
          onChange={onChangePostDataText}
          name="title"
        />
      </WriteFormInputWrap>
      <WriteFormInputWrap>
        <WriteFormInputTitle>내용</WriteFormInputTitle>
        <WriteFormTextarea
          value={postData.content}
          placeholder="내용을 입력해주세요"
          onChange={onChangePostDataText}
          name="content"
        />
      </WriteFormInputWrap>
      <WriteFormSubmitButton onClick={onSubmitPostData}>
        등록
      </WriteFormSubmitButton>
    </>
  );
};

export default WriteForm;
