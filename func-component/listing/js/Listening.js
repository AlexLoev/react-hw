'use strict';

function Listening({ list }) {
    // console.log('Listening', typeof (list));
    //   list.map(item => console.log(item));
    list = list.map(item => {
        // console.log(item);
        
        var title = item.title ? item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title : "";
        var price = item.currency_code = "USD" ? "$" + item.price : item.currency_code = "EUR" ? "€" + item.price : item.price + " " + item.currency_code
        var quantClass = item.quantity <= 10 ? "low" : item.quantity <= 50 ? "medium" : "high";
        return (
            <div key={item.listening_id} className="item">
                <div className="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{title}</p>
                    <p className="item-price">{price} </p>
                    <p className={"item-quantity level-"+quantClass}>{item.quantity}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="item-list">{list}</div>
    );
}
