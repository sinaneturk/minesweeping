import { createSlice } from '@reduxjs/toolkit'

const getCells = () => {
    const cellArr = [];
    let mineNumber = 0;
   
    for( let i =0; i < 10; i++){
        for( let j =0; j < 10; j++){
            const random =  Math.floor(Math.random() * 2) === 1;
            let c = {
                id:i + "" +j,
                xIndex:i,
                yIndex:j,
                mine: random && mineNumber < 10,
                clicked:false
            }

            if(random){
                mineNumber++;
            }

            cellArr.push(c);
        }
    }

    return cellArr;
}

export const cellSlice = createSlice({
  name: 'cell',
  initialState: {
    numOfRows: 10,
    numOfColumns:10,
    clickedCell:[],
    cells : getCells()
  },
  reducers: {
    setRowsNumber: (state, action) => {
      state.rows = action.payload
    },

    setColumnsNumber: (state, action) => {
      state.columns = action.payload
    },

    setCells: (state, action) => {
      state.cells = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRowsNumber, setColumnsNumber, setCells } = cellSlice.actions

export default cellSlice.reducer