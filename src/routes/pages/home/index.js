import Board from "../../../components/board";
import BoardController from "../../../components/board-controller";
import './style.css'

function Home() {
    return (
        <div className="home">
            <BoardController />
            <Board />
        </div>
    );
}

export default Home;