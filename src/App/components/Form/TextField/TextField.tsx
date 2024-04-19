import styled from './textfield.module.scss';
type TProps = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ text, onChange }: TProps) => {
  return (
    <input
      className={styled.my_input}
      type="text"
      value={text}
      onChange={onChange}
      placeholder="What needs to be done"
      maxLength={50}
    />
  );
};

export default TextField;
