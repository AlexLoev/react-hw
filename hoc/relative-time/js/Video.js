'use strict';

function GetRelativeTime(Component) {
    return class extends React.Component {
        render() {
            if (!this.props.date) {
                this.props.date = new Date()
            }
            var now = new Date();
            var date = new Date(this.props.date);
            var mins = Math.floor((now - date) / 1000 / 60) + 1 
            switch (true) {
                case (mins < 60):
                    this.props.date = `менее ${declension(mins, ['минуты', 'минут'])} назад`
                    break;
                case (mins < 1400):
                    const hours = Math.round(mins / 60);
                    this.props.date = `менее ${declension(hours, ['часа', 'часов'])} назад`
                    break;
                default:
                    const days = Math.round(mins / 1400);
                    this.props.date = `менее ${declension(days, ['дня', 'дней'])} назад`
                    break;
            }

            return <Component {...this.props} />
        }
    }
}

function declension(num, expressions) {
    var result;
    var count = num % 100;
    if (count >= 5 && count <= 20) {
        result = expressions['1'];
    } else {
        count = count % 10;
        if (count == 1) {
            result = expressions['0'];
        } else if (count >= 2 && count <= 4) {
            result = expressions['1'];
        } else {
            result = expressions['1'];
        }
    }

    return num + ' ' + result;
}


const DateTimePretty = GetRelativeTime(DateTime);

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
};