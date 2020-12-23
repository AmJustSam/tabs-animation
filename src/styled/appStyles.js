import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Navigation = styled(motion.div)`
      width: 100%;
      max-width: 500px;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 28px 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0 rgb(27 20 39, 1);

      ul {
        width: 80%;
        display: flex;
        justify-content: space-between;
        list-style: none;
      }
`

export const List = styled(motion.li)`
    font-size: 16px;
    font-weight: 600;
    position: relative;
    cursor: pointer;
`;

export const Bar = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-bottom: 5px solid white;
`;