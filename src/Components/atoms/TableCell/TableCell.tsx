import "./TableCell.css";
import { TableCellProps } from "./TableCellType";

const TableCell = ({ content, isImage = false }: TableCellProps) => {
  return (
    <td className={isImage ? "table-stock-img" : ""}>
      {isImage ? (
        content
      ) : typeof content === "string" || "number" ? (
        <span>{content}</span>
      ) : (
        content
      )}
    </td>
  );
};

export default TableCell;
