import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { REMOVE } from "../Redux/actions/Action";
import { ADD } from "../Redux/actions/Action";
import { REMOVEONEBYONE } from "../Redux/actions/Action";

import "./style.css";

const CardDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const history = useNavigate();

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(REMOVE(id));
    history("/");
  };
  console.log(id);

  const removeOne = (item) => {
    dispatch(REMOVEONEBYONE(item));
  };
  const itemData = useSelector((state) => state.cartreducer.carts);
  const compare = () => {
    let compareData = itemData.filter((item) => {
      return item.id === id;
    });
    setData(compareData);
    console.log(compareData);
  };

  useEffect(() => {
    compare();
    console.log("From carddetails usereffecct , called");
  }, [itemData]);
  return (
    <div className="container mt-2">
      <h2 className="text-center"> Details Page</h2>

      <section className="container mt-3">
        <div className="itemsdetails">
          {data.map((item) => (
            <>
              <div className="items_img">
                <img src={item.imgdata} alt="item_image" />

                <Table>
                  <tr>
                    <td>
                      <p>
                        {" "}
                        <strong>Restaurent</strong> : {item.rname}
                      </p>
                      <p>
                        {" "}
                        <strong>Price</strong> :{item.price}
                      </p>
                      <p>
                        {" "}
                        <strong>Dishes</strong> : {item.address}
                      </p>
                      <p>
                        {" "}
                        <strong>Total Rs</strong> : {item.price * item.qnty}
                      </p>

                      <div
                        className="mt-5 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                          height: "40px",
                        }}
                      >
                        <span
                          style={{ fontSize: 23 }}
                          onClick={
                            item.qnty <= 1
                              ? () => dlt(item)
                              : () => removeOne(item)
                          }
                        >
                          -{" "}
                        </span>
                        <span style={{ fontSize: 23 }}>{item.qnty}</span>
                        <span
                          style={{ fontSize: 23 }}
                          onClick={() => send(item)}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                    </td>

                    <td>
                      <p>
                        <strong>Rating :</strong>{" "}
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {item.rating}★{" "}
                        </span>
                      </p>
                      <p>
                        <strong>Order Review :</strong>{" "}
                        <span>{item.somedata}</span>
                      </p>
                      <p>
                        <strong>Remove :</strong>{" "}
                        <span>
                          <i
                            className="fas fa-trash"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(item.id)}
                          ></i>{" "}
                        </span>
                      </p>
                    </td>
                  </tr>
                </Table>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
