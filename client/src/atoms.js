import { atom } from "recoil";

export const cardWindowState = atom({
  key: "cardWindow",
  default: [],
});

export const GamePlayDataState = atom({
  key: "GamePlayObj",
  default: [],
});

export const gameboardData = atom({
  key: "gameboardData",
  default: [],
});

export const activeUserData = atom({
  key: "activeUserData",
  default: [],
});

export const tableRenderer = atom({
  key: "tableRenderer",
  default: [],
});
