import { TableItem, Button } from "./index";

interface ITableRowsRead {
  name: string;
  description: string;
  value: number;
  id: string;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export const TableRowsRead: React.FC<ITableRowsRead> = ({
  id,
  name,
  description,
  value,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <tr key={id}>
      <TableItem className="table-items">{name}</TableItem>
      <TableItem className="table-items">{description}</TableItem>
      <TableItem className="table-items">{value}</TableItem>
      <TableItem className="table-items">
        <Button onClick={onClickEdit} className="edit-btn">
          Edit
        </Button>
      </TableItem>
      <TableItem className="table-items">
        <Button onClick={onClickDelete} className="delete-btn">
          Delete
        </Button>
      </TableItem>
    </tr>
  );
};
