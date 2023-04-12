import { Outlet } from "react-router-dom";
import Table from "../../../components/table";
import { useDispatch, useSelector } from "react-redux";
import { increment, setMineNumber } from "../../../redux/slices/mines";
import { useState } from "react";
import './style.css'

function Home() {
    const mineNumber = useSelector((state) => state.counter.mineNumber)
    const dispatch = useDispatch();
    const [mineNumberValue, setMineNumberValue] = useState(mineNumber)
    return (
        <div className="home">
            <div className="controller-container">
                <p>Mines</p>
                <input value={mineNumberValue} onChange={e => setMineNumberValue(e.target.value)}/>
                <button onClick={()=>{dispatch(setMineNumber(mineNumberValue))}}>Set</button>
            </div>
        <Table />
        </div>
    );
}

export default Home;