import React, { useState, useEffect } from "react";
import "./style.css";
const Todo = () => {
  // getting time
  let time = new Date().toLocaleTimeString();
  const [curTime, setCutTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCutTime(time);
  };
  setInterval(updateTime, 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // getting day
  let day = new Date().getDay();
  const [curDay, setCurDay] = useState(days[day]);
  const updateDay = () => {
    day = new Date().getDay();
    setCurDay(days[day]);
  };

  setInterval(updateDay, 1000);

  // getting from local storge
  const getLocal = () => {
    const list = localStorage.getItem("todo");

    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };
  const [taskVal, setTaskVal] = useState("");
  const [items, setItems] = useState(getLocal);
  const [curEditItem, setCurEditItem] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);
  // adding item with id
  const addItem = () => {
    if (!taskVal) {
      alert("no entry");
    } else if (taskVal && toggleBtn) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === curEditItem) {
            return { ...curElem, name: taskVal };
          }
          return curElem;
        })
      );
      setTaskVal("");
      setCurEditItem(null);
      setToggleBtn(false);
    } else {
      const myItem = {
        id: new Date().getTime().toString(),
        name: taskVal,
      };

      setItems([...items, myItem]);
      setTaskVal("");
    }
  };
  // dlt items
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };
  // edit items
  const editItem = (index) => {
    const updated_edit = items.find((curElem) => {
      return curElem.id === index;
    });
    setCurEditItem(index);
    setTaskVal(updated_edit.name);
    setToggleBtn(true);
  };
  // storing in local storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items]);

  const check = () => {
    const list = localStorage.getItem("name");
    if (list) {
      return false;
    } else {
      return true;
    }
  };

  const getName = () => {
    let namee = localStorage.getItem("name");
    return JSON.parse(namee);
  };
  const [userName, setUserName] = useState(getName);

  const [greet, setGreet] = useState(check);
  const [uname, setUname] = useState("");
  const store = () => {
    localStorage.setItem("name", JSON.stringify(uname));
    setGreet(false);
    setUserName(uname);
  };

  return (
    <>
      <div className="timeDay">
        <span className="time">{curTime},</span>
        <span className="day">{curDay}</span>
      </div>
      {greet ? (
        <div className="nameinput">
          <input
            type="text"
            className="nametext"
            placeholder="enter your name"
            value={uname}
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />
          <button className="namebtn" onClick={store}>
            Submit
          </button>
        </div>
      ) : (
        <h2 className="nameoutput">Greetings <span className="name">{userName}</span></h2>
      )}
      <div className="input">
        <div className="text_input">
          <input
            type="text"
            placeholder="Enter your task✍️"
            className="task_input"
            value={taskVal}
            onChange={(event) => setTaskVal(event.target.value)}
          />
          {toggleBtn ? (
            <i className="fas fa-edit" onClick={addItem}></i>
          ) : (
            <i className="fas fa-plus " onClick={addItem}></i>
          )}
        </div>
      </div>
      {items.map((curElem) => {
        return (
          <div className="eachElement" key={curElem.id}>
            <div className="element">
              <h3 className="task">{curElem.name}</h3>
              <div className="sidebar">
                <i
                  className="fas fa-edit  "
                  onClick={() => editItem(curElem.id)}
                ></i>
                <i
                  className="fas fa-trash-alt "
                  onClick={() => deleteItem(curElem.id)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
