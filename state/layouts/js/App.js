'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: VIEW_MODULE
    }
  };
  changeView() {
    this.setState({ view: this.state.view == VIEW_MODULE ? VIEW_LIST : VIEW_MODULE })
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.view}
            onSwitch={this.changeView.bind(this)} />
        </div>
        {this.renderLayout()}
      </div>
    );
  }

  renderLayout() {
    const cardView = this.state.view == VIEW_MODULE
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps} />
        );
      }
      return (<ShopItem {...cardProps} />)
    });
  }
}
