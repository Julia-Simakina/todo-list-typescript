import "./EditField.css";

type EditFieldPropsType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const EditField: React.FC<EditFieldPropsType> = (props) => {
  return (
    <input
      className="edit-field"
      autoFocus
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      onBlur={props.onBlur}
    />
  );
};

export default EditField;
