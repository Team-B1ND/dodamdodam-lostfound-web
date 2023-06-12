export const QUERY_KEYS = Object.freeze({
  lostFound: {
    getMyLostFounds: "lostFound/getMyLostFounds",
    getLostFoundsLostType: "lostFound/getLostFoundsLostType",
    getLostFoundsFoundType: "lostFound/getLostFoundsFoundType",
    getLostFound: (id: number) => ["lostFound/getLostFound", id],
  },
  member: {
    getMyMember: "member/getMyMember",
  },
});
