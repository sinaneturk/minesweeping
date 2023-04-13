import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { setCells } from "../../redux/slices/cell";
function Cell({cellItem}) {
    const {cells} = useSelector(s=>s.cell);
    const dispatch = useDispatch();

    const cellClicked = () => {
        if(cellItem.clicked){
            return;
        }

        if(cellItem.mine){
            alert("Game Over");
            return;
        }

        const newCells = cells.map(c => {
            if(c.id === cellItem.id){
                c = {...c,clicked:true};
            }

            return c;
        })

        dispatch(setCells(newCells))


        /*

        check if the cell has a mine
            yes
                finish game
            no
                add [x,y] to clickked cell
                check adjacent 8 cells
                    [x-1,y], [x-1, y-1], [x-1, y+1],
                    [x, y-1],[x,y+1],
                    [x+1, y-1],[x+1, y], [x+1, y+1]
                if any of them has a mine
                    increment the number that will appear on the cell clicked
                if any of them does not have mine 
                    open them as cleared.
        */
    }

    return (
        <button  className={`cell ${cellItem.clicked ? "cliked" : ""}`} onClick={cellClicked}>
        </button>
    );
}

export default Cell;