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

const PrepMonthTable = PrepareTables(MonthTable);
const PrepYearTable = PrepareTables(YearTable);
const PrepSortTable = PrepareTables(SortTable);

function PrepareTables(Component) {
    return class extends React.Component {
        render() {
            console.log("HOC", this.props)
            if (this.props.list) {
                this.props.list.map(item => {
                    const iDate = new Date(item.date);
                    const locale = "en-us";
                    item.month = iDate.toLocaleString(locale, { month: "long" });
                    item.year = iDate.getFullYear();
                });
                var grmonths = this.props.list.reduce(function (r, o) {  
                    var indx = r.findIndex(x => x["month"] === o["month"]);
                    indx != -1 ? r[indx].amount += o.amount : r.push(o);   
                    return r;
                }, []);
                console.log(grmonths)    
            }
            return <Component {...this.props} />
        }
    }
}
