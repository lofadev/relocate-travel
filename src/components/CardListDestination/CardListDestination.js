const CardListDestination = ({ children, inPc }) => {
  return <div className={`card-list ${!inPc ? "inpc" : ""}`}>{children}</div>;
};

export default CardListDestination;
