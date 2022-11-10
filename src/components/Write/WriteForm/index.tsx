import {
  WriteFormImg,
  WriteFormImgDeleteButton,
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
import { useRecoilState } from "recoil";
import { writeUploadLostFoundImageAtom } from "../../../store/write/write.store";
import Spinner from "../../Common/Spinner/Spinner";
import usePostLostFound from "../../../hooks/lostFound/usePostLostFound";
import dataTransform from "../../../utils/transform/dataTransform";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/common/useOutsideClick";
import { VscTriangleDown } from "@react-icons/all-files/vsc/VscTriangleDown";
import { useParams } from "react-router-dom";
import useModifyLostFound from "../../../hooks/lostFound/useModifyLostFound";
import { IoMdClose } from "@react-icons/all-files/io/IoMdClose";

const WriteForm = () => {
  const { lostfoundid } = useParams();

  const [image, setImage] = useRecoilState(writeUploadLostFoundImageAtom);

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

  const {
    modifyLostFoundData,
    onChangeModifyPostData,
    setModifyLostFoundData,
    onSubmitModifyPostData,
    isModifying,
  } = useModifyLostFound({
    lostFoundId: lostfoundid,
  });

  const [isModify] = useState(lostfoundid ? true : false);
  const [close, setClose] = useState(true);
  const selectInputContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setImage("");
  }, [setImage]);

  useOutsideClick({ ref: selectInputContainer, setState: setClose });

  return (
    <>
      <WriteFormInputWrap>
        <WriteFormInputTitle>분실물 이미지</WriteFormInputTitle>
        {
          <Spinner
            isAbsolute
            isLoading={isUploading || isPosting || isModifying}
          />
        }
        {image ? (
          <WriteFormImgWrap>
            <WriteFormImg src={image!} />
            <WriteFormImgDeleteButton onClick={() => setImage(null)}>
              <IoMdClose />
            </WriteFormImgDeleteButton>
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
            value={isModify ? modifyLostFoundData.place : postData.place}
            placeholder="위치를 입력해주세요"
            onChange={isModify ? onChangeModifyPostData : onChangePostDataText}
            name="place"
          />
        </WriteFormInputWrap>
        <WriteFormInputWrap>
          <WriteFormInputTitle>구분</WriteFormInputTitle>

          <WriteFormSelectWrap
            ref={selectInputContainer}
            onClick={() => setClose((prev) => !prev)}
          >
            {dataTransform.lostFoundTypeTransform(
              isModify ? modifyLostFoundData.type : postData.type
            )}
            <WriteFormSelectIcon close={close}>
              <VscTriangleDown />
            </WriteFormSelectIcon>
            {!close && (
              <WriteFormSelectItemWrap>
                <WriteFormSelectItem
                  onClick={
                    isModify
                      ? () =>
                          setModifyLostFoundData((prev) => ({
                            ...prev,
                            type: "LOST",
                          }))
                      : () => setPostData((prev) => ({ ...prev, type: "LOST" }))
                  }
                >
                  분실물
                </WriteFormSelectItem>
                <WriteFormSelectItem
                  onClick={
                    isModify
                      ? () =>
                          setModifyLostFoundData((prev) => ({
                            ...prev,
                            type: "FOUND",
                          }))
                      : () =>
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
          value={isModify ? modifyLostFoundData.title : postData.title}
          placeholder="제목을 입력해주세요"
          onChange={isModify ? onChangeModifyPostData : onChangePostDataText}
          name="title"
        />
      </WriteFormInputWrap>
      <WriteFormInputWrap>
        <WriteFormInputTitle>내용</WriteFormInputTitle>
        <WriteFormTextarea
          value={isModify ? modifyLostFoundData.content : postData.content}
          placeholder="내용을 입력해주세요"
          onChange={isModify ? onChangeModifyPostData : onChangePostDataText}
          name="content"
        />
      </WriteFormInputWrap>
      <WriteFormSubmitButton
        onClick={isModify ? onSubmitModifyPostData : onSubmitPostData}
      >
        {isModify ? "수정" : "등록"}
      </WriteFormSubmitButton>
    </>
  );
};

export default WriteForm;
