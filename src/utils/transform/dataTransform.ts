import { ClassRoom } from "../../types/common/common.type";

class DataTransform {
  public classRoomTransform(classRoom: ClassRoom, number: number) {
    const { grade, room } = classRoom;

    return `${grade}학년 ${room}반 ${number}번`;
  }
}

export default new DataTransform();
