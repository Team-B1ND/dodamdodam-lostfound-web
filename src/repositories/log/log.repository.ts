import customAxios from "../../lib/axios";
import { postModuleLogParam } from "./log.param";

class LogRepository {
  public async postModuleLog({
    description,
    moduleName,
  }: postModuleLogParam): Promise<void> {
    await customAxios.post("/logging/function", {
      description,
      moduleName,
      platform: "WEB",
    });
  }
}

export default new LogRepository();
