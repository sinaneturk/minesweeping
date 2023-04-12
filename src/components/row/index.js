import Cell from "../cell";
import './styles.css'
import { useSelector } from "react-redux";

function Row({rowIndex}) {
    const {columns} = useSelector(s => s.cell)
    return (
        <div className="row">
            {
                columns.map((columnItem, columnIndex) =>(
                <Cell 
                    key={rowIndex+columnIndex}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                />
                ))
            }
        </div>
    );
}

export default Row;