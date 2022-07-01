interface IButton {
  onClick: () => void;
  classname: string;
  children?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ onClick, classname, children }) => {
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
};
