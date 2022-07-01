interface ITableItem {
  className: string;
  children?: React.ReactNode;
}

export const TableItem: React.FC<ITableItem> = ({ className, children }) => {
  return <td className={className}>{children}</td>;
};
