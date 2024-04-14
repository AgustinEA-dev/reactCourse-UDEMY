import { Component } from "react";
import "./cardListStyles.css";
import CardComponent from "../cardComponent/CardComponent";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardComponent monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
