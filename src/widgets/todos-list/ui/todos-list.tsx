import { Todo } from '../../../entities/todo';
import { TodoType } from '../../../shared/types';
import styles from './styles.module.scss';

type Props = {
  todos: TodoType[];
  onChangeStatus: (id: TodoType['id']) => void;
};

export const TodosList = ({ todos, onChangeStatus }: Props) => {
  return todos.length ? (
    <div className={styles.todos} data-testid="todos-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onChangeStatus={onChangeStatus} />
      ))}
    </div>
  ) : (
    <div className={styles.todos}>the list is empty</div>
  );
};
