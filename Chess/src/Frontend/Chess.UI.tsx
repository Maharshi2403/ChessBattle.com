import "./App.css";

function ChessApp() {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <span className="logo">ChessBattle.com</span>
          <span className="navleft">
            <button className="menuButton">Resigne</button>
          </span>
          <span className="navleft">
            <button className="menuButton">Draw</button>
          </span>
          <span className="navleft">
            <button className="menuButton">Pause</button>
          </span>
        </div>
      </div>

      <div className="chessBoard">
        <div className="nav-right">
          <div className="mac-buttons">
            <div className="mac-button close"></div>
            <div className="mac-button minimize"></div>
            <div className="mac-button maximize"></div>
          </div>
        </div>
        <div className="Board"></div>
      </div>
    </>
  );
}

export default ChessApp;
