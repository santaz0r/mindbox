import { TodoType } from '../../shared/types';
import styles from './styles.module.scss';

type Props = {
  todo: TodoType;
  onChangeStatus: (id: TodoType['id']) => void;
};

export const Todo = ({ todo, onChangeStatus }: Props) => {
  return (
    <div className={styles.todo} data-testid="todo-item">
      <input
        defaultChecked={todo.completed}
        type="checkbox"
        data-testid="check-btn"
        onClick={() => onChangeStatus(todo.id)}
      />
      <p className={styles.todo__text}>{todo.title}</p>
    </div>
  );
};
