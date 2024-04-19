import { TTodo } from '../../types/Todos';
import styled from './todo.module.scss';
type TProps = {
  todo: TTodo;
  onChangeStatus: (id: TTodo['id']) => void;
};

const Todo = ({ todo, onChangeStatus }: TProps) => {
  return (
    <div className={styled.todo} data-testid="todo-item">
      <input
        defaultChecked={todo.completed}
        type="checkbox"
        data-testid="check-btn"
        onClick={() => onChangeStatus(todo.id)}
      />
      <p className={styled.todo__text}>{todo.title}</p>
    </div>
  );
};

export default Todo;
