import { useMutation } from "react-query";
import { postUploadParam } from "../../repositories/upload/upload.param";
import uploadRepository from "../../repositories/upload/upload.repository";

export const usePostUpload = () => {
  const mutation = useMutation(({ formData }: postUploadParam) =>
    uploadRepository.postUpload({ formData })
  );

  return mutation;
};
