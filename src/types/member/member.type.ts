export interface Member {
  email: string;
  id: string;
  readonly joinDate: string;
  name: string;
  profileImage: null | string;
  readonly role: string;
  readonly status: "ACTIVE" | "DEACTIVATED";
}

export interface MyMemberResponse extends Response {
  data: {
    classroom: {
      readonly grade: number;
      readonly id: number;
      readonly placeId: number;
      readonly room: number;
    };
    id: number;
    member: Member;
    number: number;
    phone: string;
  };
}
