import moment from 'moment'
import 'moment/locale/ru'

export default function LastUpdatedAt({ timestamp }) {
  return <span>Обновлено {moment(timestamp).locale("ru").fromNow()}</span>;
}
