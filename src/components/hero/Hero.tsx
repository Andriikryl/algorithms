import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { TsHeading } from "../heading/Heading";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.flex__group}>
          <div className={styles.hero__info}>
            <TsHeading headingLevel="h1">Algoritms</TsHeading>
            <p>
              In mathematics and computer science, an algorithm (/ˈælɡərɪðəm/ ⓘ)
              is a finite sequence of rigorous instructions, typically used to
              solve a class of specific problems or to perform a computation.[1]
              Algorithms are used as specifications for performing calculations
              and data processing. More advanced algorithms can use conditionals
              to divert the code execution through various routes (referred to
              as automated decision-making) and deduce valid inferences
              (referred to as automated reasoning), achieving automation
              eventually.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
