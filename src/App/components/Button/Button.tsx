import styled from './button.module.scss';
type TProps = {
  onClick: () => void;
  isDisabled?: boolean;
  buttonText: string;
};

const Button = ({ onClick, isDisabled, buttonText }: TProps) => {
  return (
    <button className={styled.button} onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;
