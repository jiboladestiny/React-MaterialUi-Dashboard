import React from "react";

const ToggleContext = React.createContext({
  value: null,
  toggleValue: () => {}
});

export default ToggleContext;
