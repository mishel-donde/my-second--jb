import "./Loading.css";
import loadingSource from "../../../assets/images/2cbb5e95b97aa2b496f6eaec84b9240d.gif";

export default function Loading(): JSX.Element {
  return (
    <div className="Loading">
      <img src={loadingSource} />
    </div>
  );
}
