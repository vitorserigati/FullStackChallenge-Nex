import { useState } from "react";
import { Button } from "./Buttons";
import { TableItem } from "./TableItems";

interface ITableRowsEdit {
  id: string;
  onClickCancel: () => void;
  name: string;
  description: string;
  value: Float32Array;
}

export const TableRowsEdit: React.FC<ITableRowsEdit> = ({
  id,
  onClickCancel,
  name,
  description,
  value,
}) => {
  const [Name, setName] = useState(name);
  const [Description, setDescription] = useState(description);
  const [Value, setValue] = useState<Float32Array>(value);
  return (
    <tr key={id}>
      <TableItem className="table-items">
        <input
          type="text"
          required={true}
          id="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </TableItem>
      <TableItem className="table-items">
        <input
          type="text"
          required={true}
          id="description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </TableItem>
      <TableItem className="table-items">
        <input
          type="text"
          required={true}
          id="value"
          value={Value.toString()}
          onChange={(e) => setValue(e.target.value)}
        />
      </TableItem>
      <TableItem className="table-items">
        <Button className="save-btn" type="submit">
          Save
        </Button>
      </TableItem>
      <TableItem className="table-items">
        <Button className="delete-btn" onClick={onClickCancel}>
          Cancel
        </Button>
      </TableItem>
    </tr>
  );
};
