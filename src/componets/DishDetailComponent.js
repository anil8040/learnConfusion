import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  CardImgOverlay,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let selectedDish = this.props.dish;
    if (selectedDish) {
      let comments = selectedDish.comments.map((comment) => {
        return (
          <ul key={comment.id} className="list-unstyled">
            <li> - Rating : {comment.rating}</li>
            <li> - Comment : {comment.comment}</li>
            <li>
              {" "}
              - Author : {comment.author} , #{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        );
      });

      //This is one way
      // let comments = this.props.selectedDish.comments.map((comment) => {
      //   return (
      //     <ul key={comment.id} class="list">
      //       <li>-- Rating : {comment.rating}</li>
      //       <li>-- Comment : {comment.comment}</li>
      //       <li>
      //         -- Author : {comment.author} , {comment.date}{" "}
      //       </li>
      //     </ul>

      //   );
      // });

      if (!selectedDish) return <div></div>;
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg
                  width="100%"
                  src={selectedDish.image}
                  alt={selectedDish.name}
                />
                <CardImgOverlay>
                  <CardTitle>
                    <b>{selectedDish.name}</b>
                  </CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardTitle>{selectedDish.name}</CardTitle>
                  <CardText>{selectedDish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <b>Comments </b>
              {comments}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
