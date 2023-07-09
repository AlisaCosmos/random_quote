import { useEffect, useState } from 'react';
import './MainPage.scss';
import QuoteItem from '../../components/QuoteItem/QuoteItem';
import Skeleton from '../../components/QuoteItem/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote } from '../../redux/slice/quoteSlice';

export default function MainPage() {
  const { items, status } = useSelector((state) => state.quote);

  const dispatch = useDispatch();

  const getQuote = async () => {
    dispatch(fetchQuote());
  };

  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="mainPage container__row">
      {status === 'error' ? (
        <div className="mainPage__error_info">
          <div className="error_info__title">Произошла ошибка &#128532;</div>
          <div className="error_info__text">
            К сожалению не удалось получить цитаты. Попробуйте повторить попытку позже.
          </div>
        </div>
      ) : (
        <div className="wrapper">
          {status === 'loading' ? <Skeleton /> : <QuoteItem getQuote={getQuote} />}
        </div>
      )}
    </div>
  );
}
