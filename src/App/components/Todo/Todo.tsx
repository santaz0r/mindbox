import { TTodo } from '../../types/Todos';
import styled from './todo.module.scss';
type TProps = {
  todo: TTodo;
  onChangeStatus: (id: TTodo['id']) => void;
};

const Todo = ({ todo, onChangeStatus }: TProps) => {
  const setClass = () => {
    return todo.completed ? `${styled.todo__status_done} ${styled.todo__status}` : styled.todo__status;
  };
  return (
    <div className={(styled.todos__item, styled.todo)}>
      <button className={setClass()} onClick={() => onChangeStatus(todo.id)}></button>
      <p className={styled.todo__text}>{todo.title}</p>
    </div>
  );
};

export default Todo;
