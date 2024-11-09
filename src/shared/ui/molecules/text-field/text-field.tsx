import styles from './styles.module.scss';

type Props = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField = ({ text, onChange }: Props) => {
  return (
    <input
      className={styles.my_input}
      type="text"
      value={text}
      onChange={onChange}
      placeholder="What needs to be done"
      maxLength={50}
      data-testid="text-input"
    />
  );
};
