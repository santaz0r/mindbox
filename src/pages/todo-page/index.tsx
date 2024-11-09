import { useState } from 'react';
import { TODOS_MOCK } from '../../shared/mocks';
import { TodoType } from '../../shared/types';
import { useFilteredByRadio } from '../../shared/lib/hooks';
import { Button, Group, RadioField, RadioGroup, TextField } from '../../shared/ui/molecules';
import { TodosList } from '../../widgets/todos-list/ui';
import styles from './styles.module.scss';

export const HomePage = () => {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [text, setText] = useState('');
  const [radio, setRadio] = useState<'all' | 'active' | 'completed'>('all');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  const addTodo = () => {
    const newTodo = {
      id: Date.now().toString(),
      title: text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText('');
  };

  const handleChangeStatus = (id: TodoType['id']) => {
    setTodos((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      })
    );
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value as 'all' | 'active' | 'completed');
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };
  const filteredTodos = useFilteredByRadio({ items: todos, radioState: radio });

  return (
    <>
      <h1 className={styles.title}>My todos</h1>

      <Group className={styles.group}>
        <TextField text={text} onChange={changeText} />
        <Button buttonText="Add new todo" isDisabled={!text} onClick={addTodo} />
      </Group>

      <TodosList data-testid="todos-list" todos={filteredTodos} onChangeStatus={handleChangeStatus} />

      <div className={styles.controls}>
        <div className={styles.controls__counter}>
          {activeTodos.length ? `${activeTodos.length} items left` : 'All work done :)'}
        </div>
        <RadioGroup>
          <RadioField label="all" name="filter" value="all" id="filter1" state={radio} onChange={handleRadioChange} />
          <RadioField
            label="active"
            name="filter"
            value="active"
            id="filter2"
            state={radio}
            onChange={handleRadioChange}
          />
          <RadioField
            label="completed"
            name="filter"
            value="completed"
            id="filter3"
            state={radio}
            onChange={handleRadioChange}
          />
        </RadioGroup>
        <Button
          className={styles.controls__btn}
          buttonText="Clear completed"
          isDisabled={!completedTodos.length}
          onClick={handleClearCompleted}
        />
      </div>
    </>
  );
};
