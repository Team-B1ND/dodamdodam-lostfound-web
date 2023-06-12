import { useMutation } from "react-query";
import { postUploadParam } from "../../repositories/upload/upload.param";
import uploadRepositoryImpl from "../../repositories/upload/upload.repositoryImpl";

export const usePostUpload = () => {
  const mutation = useMutation(({ formData }: postUploadParam) =>
    uploadRepositoryImpl.postUpload({ formData })
  );

  return mutation;
};
