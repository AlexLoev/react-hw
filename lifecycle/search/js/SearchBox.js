class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    let searchBoxViewElement = document.querySelector('.search-box')
    this.searchBoxElement = document.getElementById('SearchBoxView')
    this.minSearchBoxTop = this.searchBoxElement.getBoundingClientRect().y - searchBoxViewElement.getBoundingClientRect().y
    window.addEventListener("scroll", this.setPosition.bind(this));

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.setPosition)
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    return this.searchBoxElement.getBoundingClientRect().y <= this.minSearchBoxTop;
  }

  setPosition() {
    if (this.state.fixed != this.isFixed()) {
      this.setState({
        fixed: this.isFixed()
      })
    }
  }
}
