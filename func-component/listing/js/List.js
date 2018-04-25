'use strict';

function List(props) {
    // console.log(props);
    var title = props.title.length > 50 ? props.title.slice(0, 50) + '...' : props.title
    var price = props.currency_code = "USD" ? "$" + props.price : props.currency_code = "EUR" ? "€" + props.price : props.price + " " + props.currency_code
    var quantClass = props.quantity <= 10 ? "low" : props.quantity <= 50 ? "medium" : "high";
    return (
        <div key={props.listening_id} className="item">
            <div className="item-image">
                <a href={props.url}>
                    <img src={props.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price} </p>
                <p className={"item-quantity level-" + quantClass}>{props.quantity}</p>
            </div>
        </div>
    )
}

List.defaultProps = {
    title: "Заголовок не указан",
    price: 0,
    quantity: 0,
    currency_code: "$",
    MainImage: {
        url_570xN: ""
    }
}