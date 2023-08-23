import arrowDown from "../assets/arrow-down.png";
export function Input(props = {}) {
  const { label, register, rightIcon, leftIcon, ...inputProps } = props;
  return (
    <div className="w-full">
      {label && (
        <div>
          {label} {inputProps.required && <sup className="-ml-1">*</sup>}
        </div>
      )}
      <div className="input w-full flex">
        <input
          {...inputProps}
          {...(register || {})}
          className="w-full flex-1"
        />
      </div>
    </div>
  );
}
