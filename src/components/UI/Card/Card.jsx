const Card = ({ className, children }) => {
  return (
    <div className={`rounded-xl bg-white shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
