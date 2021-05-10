import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? `https://adi-bootcamp-finalproject.herokuapp.com/`
      : `http://localhost:8000/`,
});

export const getGameBoard = async (processData) => {
  // i've blocked this option in order to have on game plate, later on this comment has to be removed
  // const req = await axiosInstance.post(`/gameAPI/gameCards`);
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

export const primaryPlayersLoad = async (
  setPlayersDataState,
  setActiveUserDataState,
  turnState
) => {
  const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
  setPlayersDataState(res.data);
  setActiveUserDataState(res.data[turnState]);
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
  const res = await axiosInstance.get(`/gameAPI/users/getAll/1`);
  setPlayersDataState(res.data);
};

export const getPaid = async (details) => {
  try {
    const body = JSON.stringify(details);
    await axiosInstance.put(`/gameAPI/users/getPaid`, {
      body: body
    });
  } catch (e) {
    console.log(e);
  }
};

export const postUser = async (user, turnNum) => {
  try {
    const res = await axiosInstance.post(`/gameAPI/genUser/${user}/${turnNum}`);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const retirePlayer = async (playerID) => {
  try {
    const res = await axiosInstance.put(
      `/gameAPI/users/retirePlayer/${playerID}`
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
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

export const mortgageAnAssetAPI = async(fieldNum)=>{
  try {
    const res = await axiosInstance.put(
      `/gameAPI/gameCards/mortgageAnAsset/${fieldNum}`
    );
    return res
  } catch (e) {
    console.log(e);
  }
};

export const takeMoneyfromUser = async(userId,amount) =>{
  const body = JSON.stringify({userId,amount})
  try {
    const res = await axiosInstance.put(
      `/gameAPI/users/reduceMoney`,{body:body}
    );
    return res
  } catch (e) {
    console.log(e);
  }

}
