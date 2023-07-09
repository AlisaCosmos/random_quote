import './ButtonGet.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../../redux/slice/quoteSlice';

export default function ButtonGet({ getQuote }) {
  const dispatch = useDispatch();

  return (
    <div className="buttonGet">
      <button className="button" onClick={() => getQuote()}>
        Новая цитата
      </button>
    </div>
  );
}
