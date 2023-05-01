import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ value, step, min, max, onChange }) => {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="w-full h-7 flex group !cursor-default"
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          className={`${
            isDragged && "opacity-100"
          } h-3 w-3 !cursor-default rounded-full bg-white opacity-0 group-hover:opacity-100`}
          {...props}
          style={{
            ...props.style,
            boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%) ",
          }}
        />
      )}
    />
  );
};

export default CustomRange;
