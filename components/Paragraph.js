export const Paragraph = (props) => (
  <div
    style={{
      margin: `${props.gap === "s" ? 1.4 : 3}em 0`,
      lineHeight: 1.35,
      ...props.style,
    }}
  >
    {props.children}
  </div>
)
