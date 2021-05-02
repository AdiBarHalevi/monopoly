import React from "react";

const PlayerTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Player's Turn</th>
            <th>Player's Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Adi</td>

            <td>100000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lior</td>
            <td>200000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PlayerTable;
