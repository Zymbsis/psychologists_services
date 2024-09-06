import { useDispatch, useSelector } from 'react-redux';
import css from './FilterBar.module.css';
import Select from 'react-select';
import { getSortType } from '../../redux/psychologists/slice';
import { selectSortType } from '../../redux/psychologists/selectors';
import { styles } from './FilterBarStyles';

const options = [
  { value: 'startAfter', label: 'A to Z' },
  {
    value: 'endBefore',
    label: 'Z to A',
  },
  {
    value: 'showAll',
    label: 'Show all',
  },
];

const FilterBar = () => {
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Filters</p>
      <Select
        options={options}
        styles={styles}
        isSearchable={false}
        value={options.find((item) => item.label === sortType)}
        onChange={({ label }) => {
          if (label === 'Show all') {
            dispatch(getSortType('A to Z'));
          } else {
            dispatch(getSortType(label));
          }
        }}
      />
    </div>
  );
};
export default FilterBar;
