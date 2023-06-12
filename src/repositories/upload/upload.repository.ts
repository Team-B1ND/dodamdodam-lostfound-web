import { UploadResponse } from "../../types/upload/upload.type";
import { postUploadParam } from "./upload.param";

export interface uploadRepository {
  postUpload({ formData }: postUploadParam): Promise<UploadResponse>;
}
