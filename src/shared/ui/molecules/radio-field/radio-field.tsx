import styles from './styles.module.scss';

type Props = {
  name: string;
  label: string;
  id: string;
  state: string;
  value: 'all' | 'active' | 'completed';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioField = ({ label, name, value, id, onChange, state }: Props) => {
  return (
    <label className={styles.radio}>
      <input name={name} type="radio" value={value} id={id} checked={state === value} onChange={onChange} />
      {label}
    </label>
  );
};

export default RadioField;
