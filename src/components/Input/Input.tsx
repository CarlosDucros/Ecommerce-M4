// eslint-disable-next-line react/prop-types
import "./style.css";
const Input = ({ label, ...inputProps }) => {
  return (
    <div className="flex flex-col w-40 m-2">
      <label className="text-soft-purple font-medium"></label>
      <input
        autoComplete="off"
        className="bg-transparent border-b-2 outline-none border-dark-purple transition-colors duration-300 focus:border-soft-purple w-full"
        {...inputProps}
      />
    </div>
  );
};

export default Input;
