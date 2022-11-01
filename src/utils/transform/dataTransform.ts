import { ClassRoom } from "../../types/common/common.type";
import { LostFoundType } from "../../types/lostfound/lostfound.type";

class DataTransform {
  public classRoomTransform(classRoom: ClassRoom, number: number) {
    const { grade, room } = classRoom;

    return `${grade}학년 ${room}반 ${number}번`;
  }

  public lostFoundTypeTransform(type: LostFoundType) {
    switch (type) {
      case "LOST":
        return "분실물";

      case "FOUND":
        return "습득물";

      default:
        return "분실물";
    }
  }
}

export default new DataTransform();
