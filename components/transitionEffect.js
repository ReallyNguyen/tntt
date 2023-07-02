import React from "react";
import { motion } from "framer-motion";

export default function TransitionEffect() {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-70 bg-red"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0 }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-60 bg-brown"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-yellow"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-blue"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-green"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
            />
        </>
    );
}
