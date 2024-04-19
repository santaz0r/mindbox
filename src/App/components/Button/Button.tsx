import styled from './button.module.scss';
type TProps = {
  onClick: () => void;
  isDisabled?: boolean;
  buttonText: string;
  className?: string;
};

const Button = ({ onClick, isDisabled, buttonText, className }: TProps) => {
  const setClass = () => {
    return `${styled.button} ${className || ''}`;
  };
  return (
    <button className={setClass()} onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

export default Button;
