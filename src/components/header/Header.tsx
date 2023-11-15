import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div>
          <TsHeading headingLevel="h3">Header</TsHeading>
        </div>
      </Container>
    </header>
  );
}
