export const WavePathBackground = (props) =>
  [0, 1, 2, 5, 6, 7].map((n) => <WavePath offset={n} />);

export const WavePath = (props) => (
  <svg
    width="100%"
    height="14dvw"
    viewBox="0 0 1098.72 37"
    style={
      {
        //   position: "absolute",
        //   top: `calc(-120px + ${props.offset * 14 || 0}dvh`,
      }
    }
  >
    <path
      id="curve"
      fill="transparent"
      d="M0.17,0.23c0,0,105.85,77.7,276.46,73.2s243.8-61.37,408.77-54.05c172.09,7.64,213.4,92.34,413.28,64.19"
    />
    <text
      width="100%"
      style={{
        transform: "translate3d(0, 0, 0)",
        fontSize: "3em",
        fill: props.fill,
      }}
    >
      <textPath
        style={{ transform: "translate3d(0, 0, 0)" }}
        alignmentBaseline="top"
        xlinkHref="#curve"
        id="text-path"
      >
        {"FAITH & NATHAN & ".repeat(5)}
        <animate
          attributeName="startOffset"
          from={`-${100 + props.offset * 20}%`}
          to={`-${props.offset * 20}%`}
          begin="0s"
          dur="5s"
          repeatCount="indefinite"
        />
      </textPath>
    </text>
  </svg>
);
