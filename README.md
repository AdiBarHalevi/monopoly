Monopoly - Bootcamp's final project.

product planning:
this is a full stack project, with production (on Heroku).
during this project i astblished an active server with Node.js and used
MongoDB as a data base.

    the Website has 4 pages in total:
    1- Wellcome page, Welcomes the user and lets the user decide if he/she wants to
       initate a game or to get an explaination about the website.
    2- Register Page, this page allows the user to register players into the game or to load
       a previous game.
    3- Play page, holds all the data regarding the game . has a visual game board , a UI
       that allows the player to roll dice or make moves.
    4- Explain, this page explains about the App.

Technical planning:
Registration : on register page, on each click of registration the App sends an API call
and saves the user in the players collection in the DB.
start game: on register page, sends a request to the API to get the board.
once it arrives is saved to the local global variable(Recoil).
saves the player list localy to the global variable (Recoil)
play page:
the game picks a user and sets him to the active user global state.

        - active user manager: a component that manages the user's action it allows him to
          roll the dice* or to make a move**.

        - once the user's location updates the game renders the correct component if the user
          lands on an Asset it allows the user to buy the asset or to decline the purchase and go to an Auction***.

        - once the player is done playing (the turn is over) all the Changes that were saved
          localy are saved to the DB's players collection

    Reset button: deletes the player list, delets the board and sends the user to the
                   welcome page.

roll dice- generates random numbers saves it to the state and updates the Active user
  State to a new location.
  ** make a move- allows the user to make a move such as mortgage an asset or buy a house. \*** Auction - genereate a players rotation, during the Auction there is an active user that
  is saved localy, on each turn the player can bid or retire from the Auction.
  once the player retired from the Auction he is removed from the Auction state component.
  once there is one user left on the Auction player list, the Auction is over the
  winner of the Auction get the Asset, there is an API call to save the player's new Asset as well as it is saved Localy and re renders the board with the new Asset.
