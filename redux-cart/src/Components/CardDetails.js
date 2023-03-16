import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css";

const CardDetails = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center"> Details Page</h2>

      <section className="container mt-3">
        <div className="itemsdetails d-flex">
          <div className="items_img">
            <img />

            <Table>
              <tr>
                <td>
                  <p>
                    {" "}
                    <strong>Restaurent</strong> :Masssala Theorry
                  </p>
                  <p>
                    {" "}
                    <strong>Price</strong> :300
                  </p>
                  <p>
                    {" "}
                    <strong>Dishes</strong> : xyz
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
                      3.5 ★{" "}
                    </span>
                  </p>
                  <p>
                    <strong>Order Review :</strong> <span>4545</span>
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
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
