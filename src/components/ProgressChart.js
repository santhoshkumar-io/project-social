import { CircularProgressbar } from "react-circular-progressbar";
import "./custom.css";
const ProgressBar = () => {
  const percentage = 89;
  return (
    <CircularProgressbar
      value={percentage}
      className="h-60 w-60 "
      strokeWidth="14"
      circleRatio="0.8"
    ></CircularProgressbar>
  );
};

export default ProgressBar;
