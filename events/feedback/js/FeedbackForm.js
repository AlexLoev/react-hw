'use strict';
class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        this.props.onSubmit(JSON.stringify(this.state));
        // alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        if (target.name == "salutation") {
            const radiovalue = this.salutations.find(item => item.id == target.id);
            value = radiovalue ? radiovalue.name : this.state.salutation;
        }
        if (target.name == "snacks") {
            value = this.state.snacks;
            if (target.checked) {
                value.push(target.value)
            } else {
                value.splice(value.findIndex(item => item == target.value), 1)
            }
        }
        this.setState({
            [name]: value
        });
    }

    inputRadio(radio) {
        const checked = this.state.salutation == radio.name;
        return (
            <label className="contact-form__input--radio" key={radio.id}>
                <input
                    className="contact-form__input contact-form__input--radio"
                    id={radio.id}
                    name="salutation"
                    type="radio"
                    onChange={this.handleInputChange}
                    checked={checked}
                />
                {" " + radio.name + " "}
            </label>
        )
    };

    subOptions(subject) {
        return (
            <option key={subject.id}>{subject.title}</option>
        )
    };

    inputSnack(snack) {
        const checked = this.state.snacks.find(item => item == snack.title);
        return (
            <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">
                <input
                    className="contact-form__input contact-form__input--checkbox"
                    id="snacks-pizza"
                    name="snacks"
                    type="checkbox"
                    value={snack.title}
                    checked={checked}
                    onChange={this.handleInputChange}
                />
                {" " + this.upperFirst(snack.title) + " "}
            </label>
        )
    };

    upperFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    salutations = [
        { id: 'mr', name: 'Мистер' },
        { id: 'mrs', name: 'Мисис' },
        { id: 'ms', name: 'Мис' },
    ];

    subjects = [
        { id: '1', title: 'У меня проблема' },
        { id: '2', title: 'У меня важный вопрос' }
    ];

    snacks = [
        { id: '1', title: 'пиццу' },
        { id: '2', title: 'пирог' }
    ];

    render() {
        console.log('FeedbackForm render');
        return (
            <form className="content__form contact-form" onSubmit={this.handleSubmit}>
                <div className="testing">
                    <p>Чем мы можем помочь?</p>
                </div>
                <div className="contact-form__input-group">
                    {this.salutations.map(radio => this.inputRadio(radio))}
                </div>
                <div className="contact-form__input-group">
                    <label className="contact-form__label" htmlFor="name">Имя</label>
                    <input
                        className="contact-form__input contact-form__input--text"
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="contact-form__input-group">
                    <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                    <input
                        className="contact-form__input contact-form__input--email"
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="contact-form__input-group">
                    <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                    <select
                        className="contact-form__input contact-form__input--select"
                        id="subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    >
                        {this.subjects.map(subject => this.subOptions(subject))}
                    </select>
                </div>
                <div className="contact-form__input-group">
                    <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                    <textarea
                        className="contact-form__input contact-form__input--textarea"
                        id="message"
                        name="message"
                        rows="6"
                        cols="65"
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    ></textarea>
                </div>
                <div className="contact-form__input-group">
                    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                    {this.snacks.map(snack => this.inputSnack(snack))}
                </div>
                <button className="contact-form__button" type="submit">Отправить сообщение!</button>
                <output id="result" />
            </form>
        )
    }
}

FeedbackForm.defaultProps = {
    data: {
        salutation: 'Мисис',
        name: 'Алевтина',
        subject: 'У меня важный вопрос',
        message: 'Как оформить доставку?',
        email: 'mis@test.co',
        snacks: ['пирог']
    },
    onSubmit: console.log
}