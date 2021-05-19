import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://adi-bootcamp-finalproject.herokuapp.com/`
      : `http://localhost:8000/`,
});

export const getGameBoard = async (processData) => {
  // i've blocked this option in order to have on game plate, later on this comment has to be removed
  // await axiosInstance.post(`/gameAPI/gameCards`);
  const res = await axiosInstance.get(`/gameAPI/gameplay`);
  try {
    processData(res.data);
  } catch (e) {
    console.log(e);
  }
};

export const updatedGameBoardData = async () => {
  try {
    return await axiosInstance.get(`/gameAPI/gameplay`);
  } catch (e) {
    console.log(e);
  }
};

export const primaryPlayersLoad = async () => {
  return await axiosInstance.get(`/gameAPI/users/getAll/1`);
};

export const updateUserReq = async (activeUserDataState) => {
  try {
    const body = JSON.stringify(activeUserDataState);
    await axiosInstance.put(`/gameAPI/users/update`, {
      body: body,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getaUserListFromApi = async (setPlayersDataState) => {
  // const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
  // setPlayersDataState(res.data);
};

export const getPaid = async (details) => {
  // try {
  //   const body = JSON.stringify(details);
  //   await axiosInstance.put(`/gameAPI/users/getPaid`, {
  //     body: body,
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
};

export const postUser = async (user, turnNum, avatar) => {
  const body = { avatar };
  try {
    const res = await axiosInstance.post(
      `/gameAPI/genUser/${user}/${turnNum}`,
      { body: body }
    );

    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const retirePlayer = async (playerID) => {
  // try {
  //   const res = await axiosInstance.put(
  //     `/gameAPI/users/retirePlayer/${playerID}`
  //   );
  //   console.log(res);
  // } catch (e) {
  //   console.log(e);
  // }
};

export const changeAssetOwnerShipAPI = async (fieldNum, player) => {
  try {
    const res = await axiosInstance.put(
      `/gameAPI/gameCards/changeOwnerShip/${fieldNum}/${player}`
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const mortgageAnAssetAPI = async (fieldNum, userId, mortgageValue) => {
  try {
    const res = await axiosInstance.put(
      `/gameAPI/gameCards/mortgageAnAsset/${fieldNum}/${userId}/${mortgageValue}`
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const takeMoneyfromUser = async (userId, amount) => {
  const body = JSON.stringify({ userId, amount });
  try {
    const res = await axiosInstance.put(`/gameAPI/users/reduceMoney`, {
      body: body,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const updateLocationOnMap = async (
  previousLocation,
  currentLocation
) => {
  // const avatar = currentLocation.avatar;
  // const fieldNum = currentLocation.currentLocation;
  // let data = { previousLocation, avatar };
  // const body = JSON.stringify({ ...data });
  // try {
  //   const res = await axiosInstance.put(
  //     `gameAPI/gameCards/updateLayout/${fieldNum}`,
  //     { body: body }
  //   );
  //   return res;
  // } catch (e) {
  //   console.log(e);
  // }
};

export const ResetGameAPI = async () => {
  try {
    await axiosInstance.delete(`gameAPI/deleteGame`);
    await axiosInstance.post(`/gameAPI/gameCards`)
  } catch (e) {
    console.log(e);
  }
};

export const buyAhouseAPI = async (inputData) => {
  // const body = JSON.stringify(inputData);
  // try {
  //   const res = await axiosInstance.put(`gameAPI/buyhouse`, {
  //     body: body,
  //   });
  //   return res;
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log(body);
};
