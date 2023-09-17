import React, {useState} from "react";
import {ControlsProps} from "../../types/Modal";
import "../../styles/TimerModal.css";
import calculateStudyTime from "../../utils/studyTimeCalculator";

function Controls(props: ControlsProps) {
  const {
    setTimeInSeconds,
    setIsRunning,
    isRunning,
    setStudyDuration,
    onBreak,
    setOnBreak,
  } = props;
  const [startTime, setStartTime] = useState<number | null>(null);
  const [breakStartTime, setBreakStartTime] = useState<number | null>(null);
  const [totalBreakTime, setTotalBreakTime] = useState(0);
  const [isFirstPlay, setIsFirstPlay] = useState(true);

  const resetTimer = () => {
    setStartTime(null);
    setBreakStartTime(null);
    setTotalBreakTime(0);
    setTimeInSeconds(0);
  };

  // 타이머 시작, 재시작을 위한 핸들러
  const handlePlayButton = () => {
    if (!isRunning && isFirstPlay) {
      setIsRunning(true);
      setOnBreak(false);
      if (!startTime) {
        setStartTime(Date.now());
      }
      setIsFirstPlay(false);
    }
  };

  // 타이머 중지, 학습 시간 저장을 위한 핸들러
  const handleStopButton = () => {
    if ((isRunning || onBreak) && startTime !== null) {
      setIsRunning(false);
      setOnBreak(false);
      const endTime = Date.now();

      let effectiveBreakTime = totalBreakTime;

      if (onBreak && breakStartTime !== null) {
        effectiveBreakTime += endTime - breakStartTime;
      }
      const studyDuration = calculateStudyTime(
        startTime,
        endTime,
        effectiveBreakTime,
      );
      setStudyDuration(studyDuration);
      resetTimer();
    }
  };

  // 휴식 모드 전환, 휴식 중 타이머 재시작을 위한 핸들러
  const handleBreakButton = () => {
    if (isRunning) {
      setIsRunning(false);
      setOnBreak(true);
      setBreakStartTime(Date.now());
    } else if (onBreak) {
      setIsRunning(true);
      setOnBreak(false);
      const breakDuration = Date.now() - (breakStartTime as number);
      setTotalBreakTime(prev => prev + breakDuration);
      setBreakStartTime(null);
    }
  };

  return (
    <section className="ControlsContainer">
      <button type="button" className="PlayButton" onClick={handlePlayButton}>
        Play
      </button>
      <button type="button" className="StopButton" onClick={handleStopButton}>
        Stop
      </button>
      <button
        type="button"
        className={onBreak ? "ResumeButton" : "BreakButton"}
        onClick={handleBreakButton}
      >
        {onBreak ? "다시공부시작~!" : "휴식"}
      </button>
      <button type="button" className="ResetButton" onClick={resetTimer}>
        Reset
      </button>
    </section>
  );
}

export default Controls;