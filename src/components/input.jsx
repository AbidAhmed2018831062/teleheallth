export function Input(props = {}) {
  const { label, register, trailingButton, ...inputProps } = props;
  return (
    <div className="w-full">
      {label && (
        <div>
          {label} {inputProps.required && <sup className="-ml-1">*</sup>}
        </div>
      )}
      <div className="input w-full">
        <input {...inputProps} {...(register || {})} className="w-full" />
      </div>
    </div>
  );
}
