import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const DateComponent: React.FunctionComponent<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateComponent;
