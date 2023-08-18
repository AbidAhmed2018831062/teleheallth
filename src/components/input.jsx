export function Input(props = {}) {
  const { label, trailingButton, ...inputProps } = props;
  return (
    <div className="w-full">
      {label && (
        <div>
          {label} {inputProps.required && <sup className="-ml-1">*</sup>}
        </div>
      )}
      <div className="input w-full">
        <input {...inputProps} className="w-full" />
      </div>
    </div>
  );
}
