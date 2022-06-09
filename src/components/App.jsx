import { useSelector, useDispatch } from 'react-redux';
import {
  counterSelector,
  incremented,
  decremented,
} from 'store/slices/counterSlices';

export const App = () => {
  const count = useSelector(counterSelector.getCounter);
  const dispatch = useDispatch();
  return (
    <center className="container">
      <p className="counter">{count}</p>
      <button className="btn" onClick={() => dispatch(decremented())}>
        Increment
      </button>
      <button className="btn" onClick={() => dispatch(incremented())}>
        Increment
      </button>
    </center>
  );
};
