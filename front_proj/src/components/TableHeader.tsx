interface ITableHeader {
  className: string;
  children?: React.ReactNode;
}

export const TableHeader: React.FC<ITableHeader> = ({
  className,
  children,
}) => {
  return <th className={className}>{children}</th>;
};
