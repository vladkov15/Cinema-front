import React, { useState } from "react";
import styles from "./DateTimePicker.module.scss";


interface DateTimePickerProps{
  date: (e: Date) => void
}
const formatDate = (date: Date): string => {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return `${dayOfWeek} ${dayOfMonth} ${month}`;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({date}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
    
    
    date(newDate);
  };

  return (
    <div className={styles.date_time_picker}>
      <div className={styles.date_time_picker__date}>{formatDate(selectedDate)}</div>
      <input
        type="date"
        value={selectedDate.toISOString().substr(0, 10)}
        onChange={handleDateChange}
        className={styles.date_time_picker__input}
      />
    </div>
  );
};

export default DateTimePicker;