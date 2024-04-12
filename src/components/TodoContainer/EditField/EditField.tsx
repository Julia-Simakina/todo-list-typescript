import "./EditField.css";

interface EditFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const EditField: React.FC<EditFieldProps> = (props) => {
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
