import { InputHTMLAttributes, ReactElement } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  errorMessage?: string;
  type?: string;
  icon?: ReactElement;
}

function InputBox({
  placeholder,
  type,
  label,
  errorMessage,
  icon,
  ...inputprops
}: inputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-sm font-medium text-left py-2">
        {label}
      </label>
      <div className="flex align-middle items-center">
        <input
          type={type}
          placeholder={placeholder}
          className={`text-sm w-full bg-slate-200 text-slate-700 border-none outline-none p-2 px-3 rounded-lg shadow-sm`}
          {...inputprops}
        />
        {icon && <div className="w-16 h-16">{icon}</div>}
      </div>
      {errorMessage && (
        <span className="text-red-500 text-sm mt-2">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputBox;
