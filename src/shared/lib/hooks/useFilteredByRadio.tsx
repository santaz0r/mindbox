import { TodoType } from '../../types';

type Props = {
  radioState: 'all' | 'active' | 'completed';
  items: TodoType[];
};

export const useFilteredByRadio = ({ radioState, items }: Props) => {
  return items.filter((i) => (radioState === 'all' ? i : radioState === 'active' ? !i.completed : i.completed));
};
