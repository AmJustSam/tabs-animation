import React from "react";
import {Bar, List} from "../styled/appStyles";

const list = {
  hidden: {opacity: 0},
  show: {opacity: 1}
}

const Item = ({ title, isSelected, onClick, color }) => {
  return (
    <React.Fragment>
        <List onClick={onClick}
          variants={list}
        >
          {title}
          {isSelected && (
            <Bar
              layoutId="outline"
              initial={false}
              animate={{ borderColor: color }}
              transition={{ type: "spring", stiffness: 500, damping: 33 }}
            > 
            </Bar>
          )}
        </List>
    </React.Fragment>
  );
};

export default Item;