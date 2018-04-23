class Calendar extends React.Component {
    render() {
        return (
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{getDayName(this.props.date)}</div>
                    <div className="ui-datepicker-material-date">
                        <div className="ui-datepicker-material-day-num">{this.props.date.getDate()}</div>
                        <div className="ui-datepicker-material-month">{getMonthNameGenitive(this.props.date)}</div>
                        <div className="ui-datepicker-material-year">{this.props.date.getFullYear()}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{getMonthName(this.props.date)}</span>&nbsp;
                        <span className="ui-datepicker-year">{this.props.date.getFullYear()}</span>
                    </div>
                </div>
                {weeksTable(this.props.date)}
            </div>
        );
    }
};

function getDayName(date, locale) {
    return upperFirst(date.toLocaleDateString(locale || 'ru-RU', { weekday: 'long' }));
};

function getMonthName(date, locale) {
    return upperFirst(date.toLocaleDateString(locale || 'ru-RU', { month: 'long' }));
};

function getMonthNameGenitive(date) {
    const locale = 'ru-RU';
    const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return MONTHS[date.getMonth()];
};

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const weeks = [0, 1, 2, 3, 4, 5];
const days = [0, 1, 2, 3, 4, 5, 6];

function getWeekRow(weekNum, date) {
    return (
        <tr key={weekNum}>
            {days.map((dayNum) => getWeekDay(dayNum, weekNum, date))}
        </tr>

    );
};

function getWeekDay(dayNum, weekNum, date) {
    // var date = new Date('2018/05/23');

    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var lastDayPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
    var dayClassName = "";
    var newDayNum = 0;
    var nextMonthDay = 0;
    var prevMonthDay = lastDayPrevMonth.getDate();
    if (weekNum == 0) {
        if (dayNum < getLocalDay(firstDay) - 1) {
            newDayNum = prevMonthDay - getLocalDay(firstDay) + 2 + dayNum;
            dayClassName = "ui-datepicker-other-month";
        } else {
            newDayNum = dayNum - getLocalDay(firstDay) + 2;
        }
    } else {
        newDayNum = dayNum + 2 - getLocalDay(firstDay) + 7 * weekNum
        if (newDayNum > lastDay.getDate()) {
            nextMonthDay = newDayNum - lastDay.getDate();
            newDayNum = nextMonthDay;
            dayClassName = "ui-datepicker-other-month";
        }
    };

    if (newDayNum == date.getDate()) {
        dayClassName = "ui-datepicker-today";
    }

    return (<td className={dayClassName}>{newDayNum}</td>);
}

function weeksTable(date) {
    return (
        <table className="ui-datepicker-calendar">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="ui-datepicker-week-end" />
                <col className="ui-datepicker-week-end" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
            </thead>
            <tbody>
                {weeks.map((weekNum) => getWeekRow(weekNum, date))}
            </tbody>
        </table>
    );
};

function getLocalDay(date) {
    var day = date.getDay();
    if (day == 0) { day = 7; }
    return day;
};