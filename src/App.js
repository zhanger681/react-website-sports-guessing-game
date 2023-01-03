// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
//
//
// export default App;

import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import NFLPlayerData from "./Data.json";

function App() {
  return (
      <div className="App">
        <SearchBar placeholder="Enter a Player Name..." data={NFLPlayerData} />

      <table>
          <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Division</th>
              <th>Height</th>
              <th>Age</th>
              <th>Number</th>
          </tr>
          {/*{NFLPlayerData.map((val, key) => {*/}
          {/*    return (*/}
          {/*        <tr key={key}>*/}
          {/*            <td>{val.name}</td>*/}
          {/*            <td>{val.team}</td>*/}
          {/*            <td>{val.div}</td>*/}
          {/*            <td>{val.height}</td>*/}
          {/*            <td>{val.age}</td>*/}
          {/*            <td>{val.number}</td>*/}
          {/*        </tr>*/}
          {/*    )*/}
          {/*})}*/}
      </table>
      </div>
  );
}

export default App;
