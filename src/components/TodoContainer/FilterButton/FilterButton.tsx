import "./FilterButton.css";

interface FilterButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: string;
  isActive: boolean;
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  return (
    <li>
      <button
        onClick={props.onClick}
        className={`button button_filter ${
          props.isActive ? "button_filter_active" : ""
        }`}
      >
        {props.name}
      </button>
    </li>
  );
};

export default FilterButton;
