import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import Cardsdata from "./CardsData";
import { ADD } from "../Redux/actions/Action";
import "./style.css";

function Cards() {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();

  const send = (e) => {
    console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart</h2>
      <div className="row d-flex justify-content-center aligh-items-center">
        {data.map((ele, idx) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "solid 1px" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={ele.imgdata}
                  style={{ height: "16rem", marginTop: "1rem" }}
                />
                <Card.Body>
                  <Card.Title>{ele.rname}</Card.Title>
                  <Card.Text> Rs: {ele.price}</Card.Text>

                  <div className="button_div d-flex  justify-content-center ">
                    <Button
                      variant="dark"
                      className="col-lg-12"
                      onClick={() => send(ele)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
