'use strict';

function Listening({ list }) {
    // console.log('Listening', typeof (list));
    //   list.map(item => console.log(item));
    list = list.map(item => {
        // console.log(item);
        return <List {...item} />
    })

    return (
        <div className="item-list">{list}</div>
    );
};

Listening.defaultProps = {
    list: []    
}

