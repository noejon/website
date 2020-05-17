import { parseISO, format } from 'date-fns';

type props = {
  dateString: string;
};

const DateComponent: React.FunctionComponent<props> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
};

export default DateComponent;
