interface IButton {
  onClick?: () => void;
  className: string;
  children?: React.ReactNode;
  type?: "submit";
}

export const Button: React.FC<IButton> = ({
  onClick,
  className,
  children,
  type,
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
