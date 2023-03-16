import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";

const CardDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  console.log(id);

  const itemData = useSelector((state) => state.cartreducer.carts);
  const compare = () => {
    let compareData = itemData.filter((item) => {
      return item.id == id;
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
                        <strong>Total Rs</strong> :1212
                      </p>
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
