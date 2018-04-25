'use strict';

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://neto-api.herokuapp.com/etsy', true);

xhr.send()


xhr.onreadystatechange = function () { // (3)
    if (xhr.readyState != 4) return;

    console.log('Готово!');

    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        // console.log(JSON.parse(xhr.responseText));
        const list = JSON.parse(xhr.responseText);

        ReactDOM.render(
            <Listening list={list}/>,
            document.getElementById('root')
        );
    }

}
