import { useDispatch, useSelector } from "react-redux";
import { increment, setMineNumber } from "../../redux/slices/mines";
import { useState } from "react";
import { newGame, setColumnsNumber, setRowsNumber } from "../../redux/slices/cell";

const BoardController = () => {
    const mineNumber = useSelector((state) => state.counter.mineNumber)
    const { numOfColumns, cells} = useSelector((state) => state.cell);
    const dispatch = useDispatch();
    const [mineNumberValue, setMineNumberValue] = useState(mineNumber);
    const [columnsNumberValue, setColumnsNumberValue] = useState(mineNumber);
    const [rowsNumberValue, setRowsNumberValue] = useState(mineNumber);
    return (
        <>
            <div className="controller-container" style={{width:31*numOfColumns}}>
                <p className="margin-0">Mines</p>
                <input value={mineNumberValue} onChange={e => setMineNumberValue(e.target.value)}/>
                <button onClick={()=>{dispatch(setMineNumber(mineNumberValue))}}>Set</button>
            </div>

            <div className="controller-container" style={{width:31*numOfColumns}}>
                <p className="margin-0">Columns</p>
                <input value={columnsNumberValue} onChange={e => setColumnsNumberValue(e.target.value)}/>
                <button onClick={()=>{dispatch(setColumnsNumber(columnsNumberValue))}}>Set</button>
            </div>

            <div className="controller-container" style={{width:31*numOfColumns}}>
                <p className="margin-0">Rows</p>
                <input value={rowsNumberValue} onChange={e => setRowsNumberValue(e.target.value)}/>
                <button onClick={()=>{dispatch(setRowsNumber(rowsNumberValue))}}>Set</button>
            </div>

            <div className="controller-container" style={{width:31*numOfColumns}}>
                <button onClick={()=>{dispatch(newGame())}}>New Game</button>
            </div>
        </>
    )
}

export default BoardController;