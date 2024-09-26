import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale"; // Import the French locale

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d MMMM yyyy", { locale: fr })} {/* Using French format */}
    </time>
  );
};

export default DateFormatter;
