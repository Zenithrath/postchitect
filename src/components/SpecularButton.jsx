import "./SpecularButton.css";

export default function SpecularButton({
  children = "Get Started",
  size = "lg",
  radius = 18,
  tint = "#ffffff",
  tintOpacity = 0,
  blur = 0,
  textColor = "#f5f5f5",
  lineColor = "#ffffff",
  baseColor: _baseColor,
  intensity: _intensity,
  shineSize: _shineSize,
  shineFade: _shineFade,
  thickness: _thickness,
  speed = 0.35,
  followMouse: _followMouse,
  proximity: _proximity,
  autoAnimate: _autoAnimate,
  className = "",
  type = "button",
  ...buttonProps
}) {
  return (
    <button
      type={type}
      className={`specular-button specular-button--${size}${
        className ? ` ${className}` : ""
      }`}
      style={{
        "--sb-radius": `${radius}px`,
        "--sb-tint": tint,
        "--sb-tint-opacity": tintOpacity,
        "--sb-blur": `${blur}px`,
        "--sb-text-color": textColor,
        "--sb-line-color": lineColor,
        "--sb-sweep-duration": `${Math.max(speed * 3.5, 0.75)}s`,
      }}
      {...buttonProps}
    >
      <span className="specular-button__label">{children}</span>
    </button>
  );
}
