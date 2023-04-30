import React from "react";
import { useState } from "react";
import {motion} from 'framer-motion';
const menuData = [
    'Short item', 'Very Looooooong item', 'Normal item'
]

export const Menu = () => {
    
    const [activIndex, setActive] = useState(0);

    return (
        <div style={{
            display: 'flex',
            background: '#eee',
            padding: '1rem',
            borderRadius: '25px'
        }}>
        {
            menuData.map((elem, index) => <MenuItem key={elem}
            item={elem}
            isSelected={activIndex === index}
            handleClick={() => setActive(index)}
            />)
        }
        </div>
    )
}

function MenuItem (props) {
    const {item, isSelected, handleClick} = props;

    return (
        <motion.div
        onClick={handleClick}
        style={{
            padding: '0 0.5rem',
            fontWeight: 900,
            position: 'relative'
        }}
        initial={{
            color: '#000'
        }}
        animate={{
            color: isSelected ? 'rgb(255, 0, 0)' : '#000'
        }}
        >   {
            isSelected && <ActiveLine/>
        }
            {
                item
            }
        </motion.div>
    )
}

function ActiveLine () {
    return (
        <motion.div 
            layoutId="activeItem"
            style={{
                width: '100%',
                height: '4px',
                position: 'absolute',
                bottom: '-6px',
                backgroundColor: 'red'
            }}
        />
    )
}