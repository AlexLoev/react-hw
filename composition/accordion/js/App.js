class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };

    render() {
        const info = {
            title: 'loev',
            article: 'main developer'
        }
        return (
            <main className="main">
                <h2 className="title">React</h2>
                {this.props.sections.map(info => <Section info = {info} />)}
            </main>
        )
    }
}