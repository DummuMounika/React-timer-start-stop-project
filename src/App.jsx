import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge Title="Easy" targetTime={1}/>
        <TimerChallenge Title="Not easy" targetTime={5}/>
        <TimerChallenge Title="Getting tough" targetTime={10}/>
        <TimerChallenge Title="PROS only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
