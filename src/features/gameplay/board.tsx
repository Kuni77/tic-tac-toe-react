import calculateWinner from "../../utils/utils";
import Square from "./square";

interface BoardProps {
    xIsNext: boolean;
    squares: Array<string | null>;
    onPlay: (nextSquares: (string | null)[]) => void;
}

export default function Board({xIsNext, squares, onPlay}: BoardProps) {

    function handleClick(i: number) {
        const j = i - 1;
        
        if (squares[j] || calculateWinner({ squares })) {   
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[j] = "X";
        } else {
            nextSquares[j] = "O";
        }

        onPlay(nextSquares);
    }

    const winner = calculateWinner({squares});
    let status;
    if (winner) {
        status = winner + " a gagné";
    } else {
        status = "Prochain tour : " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onClick={ () => handleClick(1) } />
                <Square value={squares[1]} onClick={ () => handleClick(2) } />
                <Square value={squares[2]} onClick={ () => handleClick(3) } />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={ () => handleClick(4) } />
                <Square value={squares[4]} onClick={ () => handleClick(5) } />
                <Square value={squares[5]} onClick={ () => handleClick(6) } />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={ () => handleClick(7) } />
                <Square value={squares[7]} onClick={ () => handleClick(8) } />
                <Square value={squares[8]} onClick={ () => handleClick(9) } />
            </div>
        </>
      );
}