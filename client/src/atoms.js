import { atom } from "recoil";

export const cardWindowState = atom({
  key: "cardWindow",
  default: [],
});

export const GamePlayDataState = atom({
  key: "GamePlayObj",
  default: [],
});

export const gameCardsData = atom({
  key: "gameCardsData",
  default: [],
});

export const activeUserData = atom({
  key: "activeUserData",
  default: [],
});

export const shouldLayoutChange = atom({
  key: "shouldLayoutChange",
  default: true,
});
