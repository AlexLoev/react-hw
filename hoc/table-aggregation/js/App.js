'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <PrepMonthTable list={this.state.list} />
                <PrepYearTable list={this.state.list} />
                <PrepSortTable list={this.state.list} />
            </div>
        );
    }
};

const PrepMonthTable = PrepareTables(MonthTable, "month", "monthNum");
const PrepYearTable = PrepareTables(YearTable, "year", "year");
const PrepSortTable = PrepareTables(SortTable, "date", "date");

function PrepareTables(Component, GroupField, SortField) {
    return class extends React.Component {
        render() {
            if (this.props.list.length) {
                // расширяем массив новыми полями
                this.props.list.map(item => {
                    const iDate = new Date(item.date);
                    const locale = "en-us";
                    item.month = iDate.toLocaleString(locale, { month: "long" });
                    item.monthNum = iDate.getMonth();
                    item.year = iDate.getFullYear();
                });
                // применяем сортировку, если запросили
                if (SortField) {
                    this.props.list.sort(function (a, b) {
                        var textA = a[SortField];
                        var textB = b[SortField];
                        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                    });
                }
                // применяем группировку, если запросили
                if (GroupField) {
                    this.props.list = this.props.list.reduce(function (r, o) {
                        var indx = r.findIndex(x => x[GroupField] === o[GroupField]);
                        indx != -1 ? r[indx].amount += o.amount : r.push({ ...o });   // пришлось использовать деструктор, чтобы создавались новые объекты, а не ссылки на существующие
                        return r;
                    }, []);
                }
            }
            return <Component {...this.props} />
        }
    }
}
