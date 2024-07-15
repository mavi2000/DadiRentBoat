const CalendarDays = ({
  day,
  handleDayClick,
  handleDayHover,
  unavailableRanges,
  rangeStart,
  hoverDate,
}) => {
  const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  const tempDate = new Date(firstDayOfMonth);
  tempDate.setDate(tempDate.getDate() - weekdayOfFirstDay);

  const isInRange = (date, start, end) => {
    if (!start || !end) return false;
    if (start <= end) return start <= date && date <= end;
    return end <= date && date <= start;
  };

  const isUnavailable = (date) => {
    return unavailableRanges.some((range) =>
      isInRange(date, range.start, range.end)
    );
  };

  const isHovering = (date) => {
    return rangeStart && hoverDate && isInRange(date, rangeStart, hoverDate);
  };

  for (let i = 0; i < 35; i++) {
    const calendarDay = {
      currentMonth: tempDate.getMonth() === day.getMonth(),
      date: new Date(tempDate),
      month: tempDate.getMonth(),
      number: tempDate.getDate(),
      selected: tempDate.toDateString() === day.toDateString(),
      year: tempDate.getFullYear(),
      unavailable: isUnavailable(tempDate),
      hovering: isHovering(tempDate),
    };

    currentDays.push(calendarDay);
    tempDate.setDate(tempDate.getDate() + 1);
  }

  return (
    <div className="grid grid-cols-7 w-full gap-0">
      {currentDays.map((day, index) => (
        <div
          className={
            'calendar-day flex justify-center items-center py-2 hover:bg-[#CBA557]' +
            (day.currentMonth ? ' current' : '') +
            (day.unavailable ? ' bg-[#CBA557]' : '') +
            (day.hovering ? ' bg-[#cba457a4]' : '')
          }
          key={index}
          onClick={() => {
            handleDayClick(day);
          }}
          onMouseEnter={() => handleDayHover(day)}
          style={{ cursor: day.unavailable ? 'default' : 'pointer' }}
        >
          <p className={`${day.unavailable ? ' line-through' : ''}`}>
            {day.number}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
