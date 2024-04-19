import styled from './App.module.scss';
import { useState } from 'react';
import data from '../data/data.json';
import TodosList from './components/TodosList/TodosList';
import TextField from './components/Form/TextField/TextField';
import { TTodo } from './types/Todos';
import Button from './components/Button/Button';
import Group from './components/Group/Group';
import RadioField from './components/Form/inputs/RadioField';
import RadioGroup from './components/Group/InputRadioGroup';
import useFilteredByRadio from '../hooks/useFilteredByRadio';

function App() {
  const [todos, setTodos] = useState(data);
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

  const handleChangeStatus = (id: TTodo['id']) => {
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
      <h1 className={styled.title}>My todos</h1>

      <Group className={styled.group}>
        <TextField text={text} onChange={changeText} />
        <Button buttonText="Add new todo" isDisabled={!text} onClick={addTodo} />
      </Group>

      <TodosList data-testid="todos-list" todos={filteredTodos} onChangeStatus={handleChangeStatus} />

      <div className={styled.controls}>
        <div className={styled.controls__counter}>
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
          className={styled.controls__btn}
          buttonText="Clear completed"
          isDisabled={!completedTodos.length}
          onClick={handleClearCompleted}
        />
      </div>
    </>
  );
}

export default App;
