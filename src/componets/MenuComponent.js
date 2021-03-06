import React, { Component } from "react";

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  //   renderDish(dish) {
  //     if (dish) {
  //       return <DishDetail selectedDish={dish} />;
  //     } else {
  //       return <div></div>;
  //     }
  //   }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>
                <b>{dish.name}</b>
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* <div className="row">{this.renderDish(this.state.selectedDish)}</div> */}
      </div>
    );
  }
}

export default Menu;
