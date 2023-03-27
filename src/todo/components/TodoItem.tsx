import { useContext } from 'react';
import { TodoContext } from '../context';
import { useTodos } from '../hooks';
import { Todo } from '../interfaces';

interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();

  return (
    <li
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
      onDoubleClick={() => toggleTodo(todo.id)}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
