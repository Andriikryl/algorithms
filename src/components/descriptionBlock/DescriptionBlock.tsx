import React from "react";
import styles from "./style.module.css";

interface DescriptionBlockProps {
  children: React.ReactNode;
}

export default function DescriptionBlock({ children }: DescriptionBlockProps) {
  return <p className={styles.description}>{children}</p>;
}
