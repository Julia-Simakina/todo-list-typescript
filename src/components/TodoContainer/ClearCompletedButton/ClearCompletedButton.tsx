import "./ClearCompletedButton.css";

type ClearCompletedButtonPropsType = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ClearCompletedButton: React.FC<ClearCompletedButtonPropsType> = (props) => {
  return (
    <button className="button button_clear" onClick={props.onClick}>
      Clear completed
    </button>
  );
};

export default ClearCompletedButton;
