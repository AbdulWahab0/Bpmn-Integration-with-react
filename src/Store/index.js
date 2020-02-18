import React from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    todos: [
      {
        name: "Lunch",
        description: "Lunch with dinner"
      },
      {
        name: "Shopping",
        description: "Shopping with family"
      },
      {
        name: "Breakfast",
        description: "family time"
      }
    ],
    addBug: bug => {
      store.bugs.push(bug);
    },
    get allTodos() {
      return store.todos;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
