import React, { useState } from "react";
import "./Main.scss";
import { motion, AnimateSharedLayout } from "framer-motion";
import {Container, Navigation} from "./styled/appStyles";
import Item from "./components/Item";

const items = [
  { tabName: "Home", tabColor: "#673ab7" },
  { tabName: "Clothing", tabColor: "#0099ff" },
  { tabName: "Shoes", tabColor: "#22cc88" }
];

const unordered = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 1
    }
  },
}

export default function App() {
  const [selected, setSelected] = useState(items[0].tabName);

  return (
    <AnimateSharedLayout>
      <Container>
        <Navigation
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <motion.ul
            initial="hidden"
            animate="show"
            variants={unordered}
          >
            {items.map((item) => (
              <Item
                onClick={() => setSelected(item.tabName)}
                isSelected={item.tabName === selected}
                title={item.tabName}
                color={item.tabColor}
              />
            ))}
          </motion.ul>
        </Navigation>
      </Container>
    </AnimateSharedLayout>
  );
}