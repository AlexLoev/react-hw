class Menu extends React.Component {
    render() {
        if (this.props.opened) {
            return (
                <div className="menu menu-open">
                    <div className="menu-toggle"><span></span></div>
                    <nav>
                        <ul>
                            {this.props.items.map(menuItem)}
                        </ul>
                    </nav>
                </div>
            );
        } else {
            return (
                <div className="menu menu-toggle">
                    <div className="menu-toggle"><span></span></div>
                </div>
            );

        }
    }
};

function menuItem(item) {
    return (
        <li><a href={item.href}>{item.title}</a></li>
    );
}