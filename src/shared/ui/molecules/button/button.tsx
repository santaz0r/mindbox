import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  buttonText: string;
  isDisabled?: boolean;
  className?: string;
};

export const Button = ({ onClick, isDisabled, buttonText, className }: Props) => {
  const setClass = () => {
    return `${styles.button} ${className || ''}`;
  };
  return (
    <button className={setClass()} onClick={onClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};
