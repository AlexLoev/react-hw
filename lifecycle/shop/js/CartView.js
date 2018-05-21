class CartView extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.isOpen != nextProps.isOpen || this.props.isOpen && this.props.items.length != nextProps.items.length
  }

  render() {
    const { items, isOpen, toggleCart, clearCart } = this.props;
    return (
      <section className="cart" onClick={() => toggleCart()}>
        <div>Корзина</div>
        <div className={`
          cart__content 
          ${isOpen ? 'cart__content_show' : 'cart__content_hide'} 
          ${!!items.length ? 'cart__content_full' : null}
        `}>
          {!!items.length &&
            <div>
              <ul>
                {items.map((item, i) =>
                  <li key={item.title}>  {item.title} ({item.price} руб.)</li>
                )}
              </ul>
              <button onClick={() => clearCart()} className="cart__clear">Очистить корзину</button>
            </div>
          }
          {!items.length && <p className="cart__empty">Корзина пуста</p>}
        </div>
      </section>
    )
  }
} 