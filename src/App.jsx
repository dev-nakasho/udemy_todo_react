import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setConpleteTodos] = useState([]);

  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickTodoAdd = () => {
    if (!todoText) return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickDone = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newConpleteTodo = newIncompleteTodos[index];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    setConpleteTodos([...completeTodos, newConpleteTodo]);
  };
  const onClickBack = (index) => {
    const newConpleteTodos = [...completeTodos];
    const newIncompleteTodo = newConpleteTodos[index];
    newConpleteTodos.splice(index, 1);
    setConpleteTodos(newConpleteTodos);

    setIncompleteTodos([...incompleteTodos, newIncompleteTodo]);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickTodoAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
