import React, { useState } from "react";
import Input from "../input/input";
import "./Button.css";

const Button = () => {
  const [data, setData] = useState({
    muncul: "0",
    lastIndex: "",
  });

  const input = (value) => {
    if (data.muncul === "0" && value >= 0 && value <= 9) {
      setData({
        muncul: value,
        lastIndex: "",
      });
    } else if (value >= 0 && value <= 9) {
      setData({
        muncul: (data.muncul += value),
        lastIndex: (data.lastIndex += value),
      });
    } 
    else if (value === ".") {
      if (data.lastIndex.indexOf(".") === -1) {
        setData({
          muncul: (data.muncul += value),
          lastIndex: (data.lastIndex += value),
        });
      }
    } 
    else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      const angkaAkhir = data.muncul.substr(
        data.muncul.length - 1,
        data.muncul.length
      );
      if (data.muncul === "0") {
        return;
      } else if (
        angkaAkhir !== "+" &&
        angkaAkhir !== "-" &&
        angkaAkhir !== "*" &&
        angkaAkhir !== "/"
      ) {
        setData({
          muncul: (data.muncul += value),
          lastIndex: "",
        });
      } else if (
        angkaAkhir === "+" ||
        angkaAkhir === "-" ||
        angkaAkhir === "*" ||
        angkaAkhir === "/"
      ) {
        let deleteList = data.muncul.substr(0, data.muncul.length - 1);
        setData({
          muncul: (deleteList += value),
          lastIndex: "",
        });
      }
    }
  };

  const Delete = () => {
    if ( data.muncul.length === 1) {
      setData({
        muncul: "0",
      });
    } else {
        console.log(data.muncul)
        if (data.muncul !== "0" || data.muncul.length > 0) {
            setData({
                muncul: data.muncul.substr(0, data.muncul.length - 1),
            });
        }
    }
  };

  const reset = () => {
    setData({ muncul: "0", lastIndex: "" });
  };

  const jumlah = () => {
    const angkaAkhir = data.muncul.substr(
      data.muncul.length - 1,
      data.muncul.length
    );
    if (
      angkaAkhir === "+" ||
      angkaAkhir === "-" ||
      angkaAkhir === "*" ||
      angkaAkhir === "/"
    ) {
      const deleteLast = data.muncul.substr(0, data.muncul.length - 1);
      setData({ muncul: deleteLast });
    } else {
      setData({
          // eslint-disable-next-line 
        muncul: eval(data.muncul),
      });
    }
  };

  return (
    <div className="container">
      <div className="main">
        <Input isi={data.muncul} />
      </div>
      <div className="tombol">
        <button
          className="btn btn-primary hapus"
          name="AC"
          onClick={() => reset()}
        >
          AC
        </button>
        <button
          className="btn btn-primary hapus"
          name="Delete"
          onClick={() => Delete()}
        >
          Delete
        </button>
        <br />
        <button className="btn btn-danger" name="8" onClick={() => input("8")}>
          8
        </button>
        <button className="btn btn-danger" name="7" onClick={() => input("7")}>
          7
        </button>
        <button className="btn btn-danger" name="9" onClick={() => input("9")}>
          9
        </button>
        <button className="btn btn-success" name="/" onClick={() => input("/")}>
          /
        </button>
        <br />
        <button className="btn btn-danger" name="4" onClick={() => input("4")}>
          4
        </button>
        <button className="btn btn-danger" name="5" onClick={() => input("5")}>
          5
        </button>
        <button className="btn btn-danger" name="6" onClick={() => input("6")}>
          6
        </button>
        <button className="btn btn-success" name="X" onClick={() => input("*")}>
          x
        </button>
        <br />
        <button className="btn btn-danger" name="1" onClick={() => input("1")}>
          1
        </button>
        <button className="btn btn-danger" name="2" onClick={() => input("2")}>
          2
        </button>
        <button className="btn btn-danger" name="3" onClick={() => input("3")}>
          3
        </button>
        <button className="btn btn-success" name="-" onClick={() => input("-")}>
          -
        </button>
        <br />
        <button className="btn btn-danger" name="0" onClick={() => input("0")}>
          0
        </button>
        <button className="btn btn-success" name="." onClick={() => input(".")}>
          .
        </button>
        <button className="btn btn-success" name="+" onClick={() => input("+")}>
          +
        </button>
        <button className="btn btn-warning" name="=" onClick={() => jumlah()}>
          =
        </button>
      </div>
    </div>
  );
};
export default Button;
