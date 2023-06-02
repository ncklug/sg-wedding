import door1 from "../assets/door_1.png";
import door2 from "../assets/door_2.png";
import door3 from "../assets/door_3.png";
import door4 from "../assets/door_4.png";
import door5 from "../assets/door_5.png";
import door6 from "../assets/door_6.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DOORS = [door1, door2, door3, door4, door5, door6];

export const Door = ({ onOpen, style, ...passthroughProps }) => {
  const [doorIdx, setDoorIdx] = useState(0);
  useEffect(() => {
    let timeoutId = undefined;
    if (doorIdx === DOORS.length) {
      onOpen();
      return;
    }
    timeoutId = setTimeout(
      () => {
        setDoorIdx((prev) => {
          if (prev < 2) {
            return (prev + 1) % 2;
          }
          return prev + 1;
        });
      },
      doorIdx < 2 ? 400 : 200
    );
    return () =>
      timeoutId === undefined ? undefined : clearTimeout(timeoutId);
  }, [doorIdx]);

  return (
    <Image
      src={DOORS[doorIdx]}
      onClick={() => setDoorIdx((prev) => (prev > 1 ? prev : 2))}
      width={35}
      style={{ ...style }}
      {...passthroughProps}
    />
  );
};
