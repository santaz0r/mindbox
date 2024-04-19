import { TTodo } from '../App/types/Todos';

type TProps = {
  radioState: 'all' | 'active' | 'completed';
  items: TTodo[];
};

const useFilteredByRadio = ({ radioState, items }: TProps) => {
  return items.filter((i) => (radioState === 'all' ? i : radioState === 'active' ? !i.completed : i.completed));
};

export default useFilteredByRadio;
