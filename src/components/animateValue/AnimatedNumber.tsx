"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import style from "./style.module.css";

export function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(value, { mass: 0.8, stiffness: 55, damping: 15 });
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span className={style.amount}>{display}</motion.span>;
}
