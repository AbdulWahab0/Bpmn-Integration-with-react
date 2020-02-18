import React from "react";
import TextField from "@material-ui/core/TextField";
import TodoList from "../components/TodoList";
import { StoreContext } from "../Store";
import { useObserver } from "mobx-react";

const Framework = () => {
  const [todos, setTodos] = React.useState([]);
  const store = React.useContext(StoreContext);
  React.useEffect(() => {
    setTodos(store.todos);
  }, [store.todos]);

  const onSearch = e => {
    const searchVal = e.target.value.toLowerCase();
    console.log("arha data", e.target.value);
    setTodos(store.todos);
    const filteredData = store.todos.filter(
      val =>
        val.name.toLowerCase().search(searchVal) >= 0 ||
        val.description.toLowerCase().search(searchVal) >= 0
    );
    setTodos(filteredData);
    console.log("a", filteredData);
  };

  console.log("check state at framework", todos);
  return useObserver(() => (
    <div className=" mt-4 container">
      <h1>Framework page</h1>

      <TextField
        id="standard-basic"
        label="Search"
        onChange={e => onSearch(e)}
      />
      <TodoList data={todos} />
    </div>
  ));
};

export default Framework;
