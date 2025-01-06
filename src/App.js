import { useState, useEffect } from "react";

function App() {

    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
    let intervalId;

      if (isRunning) {
     intervalId = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
            }, 1000);
        }

    return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStartPause = () => {
    setIsRunning(!isRunning);
    };

    const handleReset = () => {
   setIsRunning(false);
   setTimeElapsed(0);
    };

    return (
        <div>
            <div>{timeElapsed} seconds</div>
            <button onClick={handleStartPause}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default App;