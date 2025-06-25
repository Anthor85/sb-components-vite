import "./MyLabel.css";
interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Is all caps
   */
  allCaps?: boolean;

  /**
   * The color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * The color of the font
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  const textToShow = allCaps ? label.toUpperCase() : label;
  return (
    <span
      className={`${size} ${color || ""}`}
      style={{ color: fontColor || "black" }}
    >
      {textToShow}
    </span>
  );
};
