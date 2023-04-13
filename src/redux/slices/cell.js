import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
const getCells = (numOfRows, numOfCols, numOfMines) => {
    const cellArr = [];
    let mineNumber = 0;
   

    
    for( let i =0; i < numOfRows; i++){
        for( let j =0; j < numOfCols; j++){
            const random =  Math.floor(Math.random() * 2) === 1;
            let c = {
                id:uuidv4(),
                xIndex:i,
                yIndex:j,
                mine: random && mineNumber < numOfMines,
                clicked:false
            }

            if(random){
                mineNumber++;
            }

            cellArr.push(c);
        }
    }
console.log("len=>", cellArr.length)
    return cellArr;
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState: {
    numOfRows: 10,
    numOfColumns:10,
    numOfMines:10,
    clickedCell:[],
    cells : getCells(10,10,10)
  },
  reducers: {
    setRowsNumber: (state, action) => {
      state.numOfRows = action.payload;
      state.cells = getCells(state.numOfRows, state.numOfColumns, state.numOfMines)
    },

    setColumnsNumber: (state, action) => {
      state.numOfColumns = action.payload;
      state.cells = getCells(state.numOfRows, state.numOfColumns, state.numOfMines)
    },

    setCells: (state, action) => {
      state.cells = action.payload
    },

    newGame: (state) => {
      state.numOfColumns= 10;
      state.numOfRows= 10;
     /*  state.numOfMines= 10;
      state.clickedCell= []; */
      state.cells = getCells(10,10,10)
    }

  
  },
})

// Action creators are generated for each case reducer function
export const { setRowsNumber, setColumnsNumber, setCells, newGame } = cellSlice.actions

export default cellSlice.reducer