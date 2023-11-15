import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import { TsHeading } from "../heading/Heading";
import DescriptionBlock from "../descriptionBlock/DescriptionBlock";
import { BubbleSortVisual } from "../bubbleSortVisual/BubbleSortVisual";

export default function BubbleSort() {
  return (
    <section className={styles.bubbleSort}>
      <Container>
        <div>
          <TsHeading headingLevel="h3">Buble sort</TsHeading>
          <DescriptionBlock>
            Bubble sort, sometimes referred to as sinking sort, is a simple
            sorting algorithm that repeatedly steps through the input list
            element by element, comparing the current element with the one after
            it, swapping their values if needed. These passes through the list
            are repeated until no swaps had to be performed during a pass,
            meaning that the list has become fully sorted. The algorithm, which
            is a comparison sort, is named for the way the larger elements
            bubble up to the top of the list.
          </DescriptionBlock>
        </div>
        <div>
          <BubbleSortVisual />
        </div>
      </Container>
    </section>
  );
}
