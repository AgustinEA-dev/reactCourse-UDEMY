import { Component } from "react";
import "./searchBoxStyles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
