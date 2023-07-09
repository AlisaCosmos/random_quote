import ButtonGet from '../ButtonGet/ButtonGet';
import './QuoteItem.scss';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useDispatch, useSelector } from 'react-redux';

export default function QuoteItem({ getQuote }) {
  const { quoteText, quoteAuthor } = useSelector((state) => state.quote.items);

  return (
    <div className="quoteItem">
      <div className="quoteItem__inner">
        <div className="quoteItem__svg_lift">
          <FormatQuoteIcon />
        </div>
        <div className="quoteItem__blocks quoteItem__block1"></div>
        <div className="quoteItem__blocks quoteItem__block2"></div>
        <div className="quoteItem__content">
          <div className="quoteItem__quote">{quoteText}</div>
          <div className="quoteItem__author"> {quoteAuthor}</div>
          <div className="quoteItem__svg_right">
            <FormatQuoteIcon />
          </div>
        </div>
      </div>
      <ButtonGet getQuote={getQuote} />
    </div>
  );
}
