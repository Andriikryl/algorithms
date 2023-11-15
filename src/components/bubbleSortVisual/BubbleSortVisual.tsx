"use client";
import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { AnimatedNumber } from "../animateValue/AnimatedNumber";
import Button from "../button/Button";

const NUMBERS = Array(50)
  .fill(1)
  .map((x, i) => x + i);

const getInitialState = () => {
  const items = shuffle(NUMBERS);
  const generator = bubbleSort(items);

  return {
    count: 0,
    generator,
    idx: -1,
    items,
    playState: "paused",
  };
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SHUFFLE":
      return getInitialState();

    case "TOGGLE_SORTING": {
      switch (state.playState) {
        case "paused":
          return { ...state, playState: "sorting" };

        case "sorting":
          return { ...state, playState: "paused" };

        default:
          return state;
      }
    }

    case "TICK": {
      const { done, value } = state.generator.next();

      if (done) return { ...state, playState: "complete" };

      const [nextItems, nextIdx, nextCount] = value;

      return {
        ...state,
        items: nextItems,
        idx: nextIdx,
        count: nextCount,
      };
    }

    default:
      return state;
  }
}

export function BubbleSortVisual({ fps = 15 }) {
  const [state, dispatch] = React.useReducer(reducer, getInitialState());
  const { count, idx, items, playState } = state;

  const handleShuffle = React.useCallback(() => {
    dispatch({ type: "SHUFFLE" });
  }, []);

  const handleSort = React.useCallback(() => {
    dispatch({ type: "TOGGLE_SORTING" });
  }, []);

  const tick = React.useCallback(() => {
    dispatch({ type: "TICK" });
  }, []);

  React.useEffect(() => {
    let id: any;

    if (playState === "sorting") {
      id = setInterval(tick, 1000 / fps);
    }

    return () => clearInterval(id);
  }, [fps, playState, tick]);

  return (
    <div className={style.wrapper}>
      <div className={style.control__group}>
        <div className={style.count__box}>
          Comparisons: <AnimatedNumber value={count} />
        </div>

        <div className={style.button__grpup}>
          <Button
            text="Shuffle"
            onClick={handleShuffle}
            disabled={playState === "sorting"}
            hue={0}
          />
          <Button
            text={playState === "sorting" ? "Pause" : "Sort"}
            onClick={handleSort}
            hue={200}
            disabled={playState === "complete"}
          />
        </div>
      </div>

      <div className={style.algoritm__box}>
        {items.map((num: number, i: number) => (
          <Item key={`${num}-${i}`} num={num} isHighlighted={idx === i} />
        ))}
      </div>
    </div>
  );
}

function Item({ num, isHighlighted }: { num: number; isHighlighted: any }) {
  return (
    <>
      <motion.div
        className={style.inner__item}
        style={{
          backgroundColor: isHighlighted
            ? "var(--colors-contra)"
            : "var(--colors-offsetMore)",
          height: num * 1,
        }}
      ></motion.div>
    </>
  );
}

// Uses the Fisher-Yates algorithm
function shuffle(array: any) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }

  return result;
}

function* bubbleSort(items: any) {
  let count = 0;
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < items.length; i++) {
      count++;
      const item = items[i];
      const nextItem = items[i + 1];

      if (item > nextItem) {
        items[i] = nextItem;
        items[i + 1] = item;
        swapped = true;
      }

      yield [items, i, count];
    }
  } while (swapped);

  return [items, -1, count];
}
