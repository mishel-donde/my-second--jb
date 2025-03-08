import "./LoadingButton.css";
import loadingImageSource from "../../../../assets/images/2cbb5e95b97aa2b496f6eaec84b9240d.gif";

interface LoadingButtonProps {
  isSubmitting: boolean;
  buttonText: string;
  loadingText: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function LoadingButton(props: LoadingButtonProps): JSX.Element {
  const { isSubmitting, buttonText, loadingText, onClick } = props;

  return (
    <div className="LoadingButton">
      {!isSubmitting && <button onClick={onClick}>{buttonText}</button>}
      {isSubmitting && (
        <p>
          {loadingText}...{" "}
          <i>
            <img src={loadingImageSource} />
          </i>
        </p>
      )}
    </div>
  );
}
