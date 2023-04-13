import { useSelector } from "react-redux";
import Cell from "../cell";
import './style.css'
const  Board = () => {

  const { numOfColumns, cells} = useSelector((state) => state.cell);
  const boardWidth = 31*numOfColumns;
  console.log("CELL-LEN =>", cells.length)
  return (
    <div className="table" style={{width:boardWidth+"px"}}>
      {
        cells.map((cellItem, cellIndex) => (
          <Cell
              key={cellItem.id}
              cellItem={cellItem}
          />
        ))
      }
    </div>
  );
}

export default Board;