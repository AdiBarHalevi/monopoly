export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// save to global var
export const saveToPlayersState = (
  activeUser,
  playersDataState,
  setPlayersDataState
) => {
  if (playersDataState.length > 1) {
    const updatePlayersGlobalState = [...playersDataState];
    updatePlayersGlobalState.forEach((user, i) => {
      user[`name`] === activeUser.name
        ? (updatePlayersGlobalState[i] = activeUser)
        : console.log();
    });
    setPlayersDataState(updatePlayersGlobalState);
  }
};

export const takeMoneyFromActiveUser = (
  activeUserState,
  setActiveUserState,
  inTurnLocationState
) => {
  const tempActiveUser = { ...activeUserState };
  tempActiveUser[`balance`] -= inTurnLocationState[`price`];
  setActiveUserState(tempActiveUser);
};

export const SendUserToLocation = (
  activeUserState,
  setActiveUserState,
  detinationCardNum
) => {
  const tempActiveUser = { ...activeUserState };
  tempActiveUser[`currentLocation`] = detinationCardNum;
  setActiveUserState(tempActiveUser);
};

export const reduceMoney = (activeUserState, setActiveUserState, amount) => {
  const tempActiveUser = { ...activeUserState };
  tempActiveUser[`balance`] -= amount;
  setActiveUserState(tempActiveUser);
};
