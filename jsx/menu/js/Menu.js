class Menu extends React.Component {
    render() {
        return (
            <div class="menu menu-open">
                <div class="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        <li><a href="#home">{this.props.items[0].title}</a></li>
                        <li><a href="#about">{this.props.item[0]}</a></li>
                        <li><a href="#contact">{this.props.items}</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}