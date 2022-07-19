import { useState } from "react";

import ToggleContext from "./toggle-context";



const ToggleProvider = (props) => {
    
     const [value,setValue] = useState(false)

     const toggleValue = () => {
        setValue(!value)
     }

      const toggleContext = {
        value: value,
        toggleValue: toggleValue
      };

  return (
    <ToggleContext.Provider value={toggleContext}>
      {props.children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
