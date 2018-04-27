'use strict';

class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        const user = {
            name: "",
            email: "",
            password: ""
        }
        this.state = user;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit(event) {
        console.log('submit', event);
        const authFunc = this.props.onAuth;
        if (authFunc && typeof (authFunc) == "function") {
            authFunc(this.state);
        }
        // alert(JSON.stringify(this.state));
        event.preventDefault();
    };

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        // var value = target.type === 'checkbox' ? target.checked : target.value;
        const pattern = new RegExp(target.pattern, "g")
        var value = target.value.replace(pattern, "");
        this.setState({
            [name]: value
        });
    };

    render() {
        console.log("AuthForm render", this.state);
        return (
            <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={this.handleSubmit}>
                <div className="Input">
                    <input
                        required
                        type="text"
                        placeholder="Имя"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        />
                    <label></label>
                </div>
                <div className="Input">
                    <input 
                        type="email" 
                        placeholder="Электронная почта" 
                        name="email"
                        value={this.state.email}
                        pattern={"[^a-zA-Z0-9@.-_\-]"}
                        onChange={this.handleInputChange}
                        />
                    <label></label>
                </div>
                <div className="Input">
                    <input 
                        required 
                        type="password" 
                        placeholder="Пароль" 
                        name="password"
                        value={this.state.password}
                        pattern={"[^a-zA-Z0-9_]"}
                        onChange={this.handleInputChange}                        
                        />
                    <label></label>
                </div>
                <button type="submit">
                    <span>Войти</span>
                    <i className="fa fa-fw fa-chevron-right"></i>
                </button>
            </form>
        )
    }
}

