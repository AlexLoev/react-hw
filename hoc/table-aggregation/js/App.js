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

const PrepMonthTable = PrepareTables(MonthTable, "month");
const PrepYearTable = PrepareTables(YearTable, "year");
const PrepSortTable = PrepareTables(SortTable);

function PrepareTables(Component, GroupField) {
    return class extends React.Component {
        render() {
            // console.log("HOC", this.props)
            if (this.props.list) {
                this.props.list.map(item => {
                    const iDate = new Date(item.date);
                    const locale = "en-us";
                    item.month = iDate.toLocaleString(locale, { month: "long" });
                    item.year = iDate.getFullYear();
                });
                if (GroupField) {
                    var groupedArray = this.props.list.reduce(function (r, o) {  
                        var indx = r.findIndex(x => x[GroupField] === o[GroupField]);
                        indx != -1 ? r[indx].amount += o.amount : r.push(o);   
                        return r;
                    }, []);
                } else {
                    groupedArray = this.props.list;
                }
                // console.log("groupedArray",groupedArray)
            }
            return <Component list = {groupedArray} />
        }
    }
}
