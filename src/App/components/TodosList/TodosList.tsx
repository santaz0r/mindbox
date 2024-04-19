import { TTodo } from '../../types/Todos';
import Todo from '../Todo/Todo';

import styled from './todos-list.module.scss';

type TProps = {
  todos: TTodo[];
  onChangeStatus: (id: TTodo['id']) => void;
};

const TodosList = ({ todos, onChangeStatus }: TProps) => {
  return todos.length ? (
    <div className={styled.todos} data-testid="todos-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onChangeStatus={onChangeStatus} />
      ))}
    </div>
  ) : (
    <div className={styled.todos}>the list is empty</div>
  );
};

export default TodosList;
