import customAxios from "../../lib/axios";
import { UploadResponse } from "../../types/upload/upload.type";
import { postUploadParam } from "./upload.param";

class UploadRepository {
  public async postUpload({
    formData,
  }: postUploadParam): Promise<UploadResponse> {
    const { data } = await customAxios.post("/upload", formData);
    return data;
  }
}

export default new UploadRepository();
