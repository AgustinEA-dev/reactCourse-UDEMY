import { Component } from "react";

import "./cardStyles.css";

class CardComponent extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
        <h4>views: 2</h4>
      </div>
    );
  }
}

export default CardComponent;
