import "./ClearCompletedButton.css";

type ClearCompletedButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ClearCompletedButton: React.FC<ClearCompletedButtonProps> = (props) => {
  return (
    <button className="button button_clear" onClick={props.onClick}>
      Clear completed
    </button>
  );
};

export default ClearCompletedButton;
