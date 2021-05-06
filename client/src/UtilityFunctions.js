export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// save to global var
export  const saveToPlayersState = (activeUser,playersDataState,setPlayersDataState)=>{
  if(playersDataState.length>1){
      const updatePlayersGlobalState =[...playersDataState]
      console.log(updatePlayersGlobalState)

      updatePlayersGlobalState.forEach((user,i)=>{
        user[`name`]  === activeUser.name?
       updatePlayersGlobalState[i] = activeUser: console.log()
  })
  setPlayersDataState(updatePlayersGlobalState)
 }
}

