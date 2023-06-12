import customAxios from "../../lib/axios";
import { UploadResponse } from "../../types/upload/upload.type";
import { postUploadParam } from "./upload.param";
import { uploadRepository } from "./upload.repository";

class UploadRepositoryImpl implements uploadRepository {
  public async postUpload({
    formData,
  }: postUploadParam): Promise<UploadResponse> {
    const { data } = await customAxios.post("/upload", formData);
    return data;
  }
}

export default new UploadRepositoryImpl();
