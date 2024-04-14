// import { Component } from "react";

import { useState } from "react";
import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="app">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      {/* <CardList monsters={filteredmonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//       res.json().then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       )
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       console.log(event);
//       return { searchField };
//     });
//   };

//   onPointerenter = (event) => {
//     alert('pointer')
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredmonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="app">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredmonsters} />
//       </div>
//     );
//   }
// }

export default App;
