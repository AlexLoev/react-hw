class Section extends React.Component {
    constructor(props) {
        super(props);
        console.log("Section props", props)
        this.state = {
            info: props.info,
            open: true
        }
    };

    toggleOpen() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const {info, open} = this.state;
        return (

            <section className = {`section ${this.state.open ? "open" : ""}`} onClick={this.toggleOpen.bind(this)} >
                <button>toggle</button>
                <h3 className="sectionhead">{info.title}</h3>
                <div className="articlewrap">
                    <div className="article">
                        {info.article}
                    </div>
                </div>
            </section>
        )
    }
}