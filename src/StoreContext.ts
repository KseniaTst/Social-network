import React from "react";
import store from "./data/Store-Redux";

const StoreContext= React.createContext(store)

export default StoreContext