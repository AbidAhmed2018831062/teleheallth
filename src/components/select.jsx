export function Select(props = {}) {
  const {
    label,
    register = {},
    rightIcon,
    leftIcon,
    options = [],
    placeholder,
    ...selectProps
  } = props;

  return (
    <div className="w-full">
      {label && (
        <div>
          {label} {selectProps.required && <sup className="-ml-1">*</sup>}
        </div>
      )}
      <div className="input w-full flex">
        <select
          {...selectProps}
          {...register}
          className={`w-full flex-1 bg-transparent`}
        >
          {placeholder && (
            <option style={{ display: "none" }}>{placeholder}</option>
          )}
          {options.map((opt, key) => (
            <option key={key} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
