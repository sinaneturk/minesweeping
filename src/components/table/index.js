import { useSelector } from "react-redux";
import Cell from "../cell";
import Row from "../row";
import './style.css'
const  Table = () => {

  const {numOfRows, numOfColumns, cells} = useSelector((state) => state.cell);
  const tableWidth = numOfColumns*31;
  console.log("T=>", tableWidth)
  return (
    <div className="table" style={{width:31*numOfColumns+"px"}}>
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

export default Table;