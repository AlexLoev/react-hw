'use strict';

function MessageHistory({ list }) {
    console.log(list);
    console.log('sss')
    list = list.map(item => {
        var MessageType = Response;
        
        switch (item.type) {
            case "response": MessageType = Response; break;
            case "message": MessageType = Message; break;
            case "typing": MessageType = Typing; break;
        }
        
        return (<li key={item.id} className="clearfix"><MessageType from={item.from} message={item} /></li>)


    })
    if (list) {
        return (
            <ul>{list}</ul>
        )
    } else {
        return null
    }
}
