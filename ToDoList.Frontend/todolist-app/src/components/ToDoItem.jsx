import { React } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  };

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  };

  return (
    <li className="todo-item" key={item.id}>
      <div className="todo-item-body">
        <Checkbox
          style={
            item.checked
              ? { color: "green", "text-decoration": "line-through" }
              : {}
          }
          className="title"
          checked={item.checked}
          onChange={onCheckItem}
        >
          {item.title}
        </Checkbox>
        <p
          style={
            item.checked
              ? { color: "green", "text-decoration": "line-through" }
              : {}
          }
        >
          {item.date}
        </p>
        <p
          style={
            item.checked
              ? { color: "green", "text-decoration": "line-through" }
              : {}
          }
          className="description"
        >
          {item.desc}
        </p>
      </div>
      <Button danger="true" className="remove-button" onClick={onRemoveItem}>
        <DeleteOutlined />
      </Button>
    </li>
  );
};
