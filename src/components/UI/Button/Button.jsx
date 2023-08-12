const Button = ({ className, children, type, onClick, disabled }) => {
  return (
    <button
      type={type || "button"}
      className={`cursor-pointer rounded-[30px] border border-[#4f005f] bg-[#4f005f] px-14 py-3 text-lg text-white transition duration-300 hover:border-[#741188] hover:bg-[#741188] focus:outline-none disabled:cursor-not-allowed disabled:border-[#ccc] disabled:bg-[#ccc] disabled:text-[#666666] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
