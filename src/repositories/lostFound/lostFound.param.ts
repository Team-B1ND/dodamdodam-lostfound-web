export interface getLostFoundsLostTypeParam {
  page: number;
}

export interface getLostFoundsFoundTypeParam {
  page: number;
}

export interface getLostFoundParam {
  id: number;
}

export interface postLostfoundCommentParam {
  comment: string;
  lostFoundId: number;
}
