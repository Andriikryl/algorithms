import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";

export default function Header() {
  return (
    <header>
      <Container>
        <div>
          <TsHeading headingLevel="h3">hello</TsHeading>
        </div>
      </Container>
    </header>
  );
}
