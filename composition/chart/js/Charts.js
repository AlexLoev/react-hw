class Charts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            // series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
            labels: this.props.labels ? this.props.labels : ['cats', 'dogs', 'horses', 'ducks', 'cows'],
            colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
        }
    }

    componentDidMount() {
        this.populateArray();
        setInterval(this.populateArray.bind(this), 10000);
    }

    populateArray() {
        const series = 5;
        const serieLength = 5;

        let data = new Array(series).fill(new Array(serieLength).fill(0));
        data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

        this.setState({ data });
    }


    render() {
        const { data, colors, labels, series } = this.state;
        const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);
        return (
            <div className={"Charts " + this.props.allign}>
                {data.map((serie, serieIndex) => {
                    var sortedSerie = serie.slice(0),
                        sum;

                    sum = serie.reduce((carry, current) => carry + current, 0);
                    sortedSerie.sort(compareNumbers);

                    return (
                        <div className={"Charts--serie " + this.props.type}
                            key={serieIndex}
                            style={{ height: this.props.allign == "horizontal" ? "auto" : 250 }}
                        >
                            <label>{labels[serieIndex]}</label>
                            {serie.map((item, itemIndex) => {
                                var color = colors[itemIndex], style,
                                    size = item / (this.props.type == "stacked" ? sum : max) * 100;

                                style = {
                                    backgroundColor: color,
                                    opacity: this.props.type == "stacked" ? 1 : item / max + .05,
                                    zIndex: item,
                                    height: this.props.allign == "horizontal" ? null : size + '%',
                                    width: this.props.type == "layered" ? null : (this.props.allign == "horizontal" ? size : 100) + '%',
                                    right: (this.props.type == "layered" ? ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) : 0) + '%'
                                };

                                return (
                                    <div
                                        className={"Charts--item " + this.props.type}
                                        style={style}
                                        key={itemIndex}
                                    >
                                        <b style={{ color: color }}>{item}</b>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                <Legend labels={labels} colors={colors} />
            </div>
        )
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
    return a - b;
}