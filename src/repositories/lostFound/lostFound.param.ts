import { LostFoundApply } from "../../types/lostfound/lostfound.type";

export interface getLostFoundsLostTypeParam {
  page: number;
}

export interface getLostFoundsFoundTypeParam {
  page: number;
}

export interface getLostFoundParam {
  id: number;
}

export interface postLostFoundCommentParam {
  comment: string;
  lostFoundId: number;
}

export interface patchLostFoundCommentParam {
  comment: string;
  commentId: number;
}

export interface deleteLostFoundCommentParam {
  commentId: number;
}

export interface postLostFoundParam {
  data: LostFoundApply;
}
