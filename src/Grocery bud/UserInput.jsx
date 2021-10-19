import React, { useState, useEffect } from "react";
import "./styles.css";

function saveToLocalStorage(setList) {
  let data = JSON.parse(localStorage.getItem("list"));
  if (data) {
    setList(data);
  } else {
    localStorage.setItem("list", JSON.stringify([]));
  }
}
export default function UserInput() {
  const [list, setList] = useState([]);
  const [userInput, setInput] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [itemIndex, setIndex] = useState(0);
  const [alert, setAlert] = useState({ message: null, class: "" });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("list"));
    if (data) {
      setList(data);
    } else {
      localStorage.setItem("list", JSON.stringify([]));
    }
  }, []);
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert((prev) => {
        return { message: null, class: "" };
      });
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [alert]);
  function displayAlert(message, stylingClass) {
    setAlert((prev) => {
      return { message: message, class: stylingClass };
    });
  }
  // localStorage.clear()
  function displayList(e) {
    e.preventDefault();
    if (userInput.trim().length !== 0) {
      setList((prev) => {
        return [...prev, userInput];
      });
      setInput("");
      localStorage.setItem("list", JSON.stringify([...list, userInput]));
    }
    !userInput || userInput.trim().length === 0
      ? displayAlert("please enter a value", "value-discarded")
      : displayAlert("item added", "value-added");
  }
  function edit(i) {
    setEdit(true);
    const itemIndex = list.findIndex((el, j) => j === i);
    setIndex(itemIndex);
    setInput(list[itemIndex]);
  }
  function changeIngridients(e) {
    e.preventDefault();
    const editedItems = list.map((e, i) => (itemIndex === i ? userInput : e));
    setList(editedItems);
    setInput("");
    setEdit(false);
    displayAlert("value changed", "value-added");
    localStorage.setItem("list", JSON.stringify(editedItems));
  }
  function deleteItem(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  }
  return (
    <section className="section">
      <h2 className="title">Grocery Bud</h2>
      <h2 className={`alert ${alert.class}`}>{alert.message}</h2>
      <form action="" onSubmit={isEdit ? changeIngridients : displayList}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          name="input"
          value={userInput}
          placeholder="eg. eggs"
          id="user-input"
        ></input>
        <button className="submit-btn">{isEdit ? "Edit" : "Submit"}</button>
      </form>
      <div className="item-list">
        {list.length >= 0 &&
          list.map((e, i) => {
            return (
              <div className="grocery-item" key={Math.random()}>
                <p className="item-name">{e}</p>
                <div className="btn-list">
                  <button
                    className="edit"
                    onClick={() => {
                      edit(i);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      deleteItem(i);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {list.length >= 1 && (
        <button
          className="clear-all"
          onClick={() => {
            setList([]);
            localStorage.clear();
          }}
        >
          clear all
        </button>
      )}
    </section>
  );
}
