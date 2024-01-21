import React, { useState, useEffect } from "react";
import { Card, Divider, Button } from "antd";
import { ToDoItem } from "./ToDoItem";
import { ToDoForm } from "./ToDoForm";

export const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const apiAddress = "https://localhost:44378";
  const homeAddress = apiAddress + "/home";
  const headers = new Headers({
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Content-Type": "application/json",
  });

  useEffect(() => {
    fetch(homeAddress, {
      method: "GET",
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        const newItems = json.list.map((item) => ({
          id: item.id,
          title: item.name,
          desc: item.description,
          date: new Date(Date.parse(item.dateCreated))
            .toLocaleString()
            .slice(0, 17)
            .replace(/\//g, ".")
            .replace(/,/g, " -"),
          checked: item.isCompleted,
        }));
        setTodos(newItems);
      });
  }, [todos]);

  const renderTodoItems = (todos) => {
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            item={todo}
            onRemove={onRemove}
            onCheck={onCheck}
          />
        ))}
      </ul>
    );
  };

  const onRemove = (id) => {
    const apiDelete = apiAddress + "/id?id=" + id;
    fetch(apiDelete, {
      method: "DELETE",
      headers: headers,
    });
  };

  const onCheck = async (id) => {
    const apiId = apiAddress + "/check?id=" + id;
    await fetch(apiId, {
      method: "POST",
      headers: headers,
    });
  };

  const onSubmit = (title, desc) => {
    if (
      title == null ||
      desc == null ||
      title.length < 3 ||
      desc.length < 3 ||
      title[0] != title[0].toUpperCase()
    ) {
      alert(
        "Length of the field shouldn't be less than 3 characters. Title should start with a capital letter"
      );
    } else {
      const apiAdd = apiAddress + "/Add?name=" + title + "&description=" + desc;
      fetch(apiAdd, {
        method: "POST",
        headers: headers,
      });
    }
  };

  const numberOfUnChecked = () => {
    let count = 0;

    let i = todos.length;
    while (i--) {
      if (todos[i].checked === false) {
        count++;
      }
    }

    return count;
  };

  return (
    <Card title={"Todo list"} className="todo-card">
      <ToDoForm onSubmit={onSubmit} />
      <Divider />
      {renderTodoItems(todos)}
      <Divider />
      <p>
        Number of Unchecked cards:{" "}
        <p className="todo-numberUnchecked">{numberOfUnChecked()}</p>
      </p>
      <Divider />
    </Card>
  );
};
