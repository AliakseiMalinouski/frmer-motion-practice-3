import React from "react";
import {motion} from 'framer-motion';

const tasks =  [
    '1', '2', '3', '1', '2', '3', '1', '2', '3',
    '1', '2', '3', 
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3',
    '1', '2', '3'
]

// const animationRules = {
//     hidden: {
//         opacity: 0,
//     },
//     visible: custom => ({
//         opacity: 1,
//         transition: {
//             delay: custom * 0.1
//         }
//     })
// }

const anim = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export const View = () => {
    return (
        <>
            <div style={{
                    width: '50%',
                    display: 'flex',
                    alignItems:'center',
                    flexDirection: 'column',
                    margin: '0 auto'
                }}>
            {
                tasks.map((e, index) => <motion.div
                key={e + Math.random()}
                
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: "center",
                    width: '100px', height: '100px',
                    background: '#eee',
                    border: '1px solid red'
                }}
                >
                    {e}
                </motion.div>)
            }
            </div>
            <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            variants={anim}
            transition={{
                delay: 1
            }}
            style={{fontSize: '32px', padding: '2rem'}}
            >
                I am a text
            </motion.div>
        </>
            
    )
}