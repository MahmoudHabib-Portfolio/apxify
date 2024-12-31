import { motion } from "framer-motion";

export const FirstLineRow = () => {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="386"
        height="1"
        fill="none"
        >
        <motion.line
        y1="0.5"
        x2="324"
        y2="0.5"
        stroke="#B9FF66"
        initial={{ x2: 0, opacity: 0 }}
        whileInView={{opacity: 1, x2:324}}
        viewport={{once: true, margin:"-100px"}}
        transition={{ duration: 1 }}
      />
      <motion.line
        x1="331"
        y1="0.5"
        x2="352"
        y2="0.5"
        stroke="#B9FF66"
        initial={{ x2: 331, opacity: 0 }}
        whileInView={{opacity: 1, x2: 352}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="359"
        y1="0.5"
        x2="372"
        y2="0.5"
        stroke="#B9FF66"
        initial={{ x2: 359, opacity: 0 }}
        whileInView={{opacity: 1, x2: 372}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.line
        x1="379"
        y1="0.5"
        x2="386"
        y2="0.5"
        stroke="#B9FF66"
        initial={{ x2: 379, opacity: 0 }}
        whileInView={{opacity: 1, x2:386}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 1.5 }}
      />
        </svg>
    );
}

export const ThirdLineRow = () => {
    return(
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="619"
        height="1"
        fill="none"
        >
        <motion.line 
        y1="0.5"
        x2="519.575"
        y2="0.5"
        stroke="#B9FF66"
        initial={{ x2: 0, opacity: 0 }}
        whileInView={{opacity: 1, x2:519.575}}
        viewport={{once: true, margin:"-100px"}}
        transition={{ duration: 1 }}
        />
        <motion.line 
        x1="530.801" 
        y1="0.5" 
        x2="564.477" 
        y2="0.5" 
        stroke="#B9FF66"
        initial={{ x2: 530.801, opacity: 0 }}
        whileInView={{opacity: 1, x2: 564.477}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line 
        x1="575.702" 
        y1="0.5" 
        x2="596.549" 
        y2="0.5" 
        stroke="#B9FF66"
        initial={{ x2: 575.702, opacity: 0 }}
        whileInView={{opacity: 1, x2: 596.549}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line 
        x1="607.775" 
        y1="0.5" 
        x2="619" 
        y2="0.5" 
        stroke="#B9FF66"
        initial={{ x2: 607.775, opacity: 0 }}
        whileInView={{opacity: 1, x2: 619}}
        viewport={{once: true}}
        transition={{ duration: 1, delay: 0.5 }}
        />
        </svg>
    );
}