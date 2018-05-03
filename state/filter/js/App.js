'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'Websites'
    }
  };
  onChangeFilter(filter) {
    this.setState({ filter: filter })
  }
  filterProjects(props) {
    return this.props.projects.filter(project =>
      project.category == this.state.filter || this.state.filter == 'All'
    )
  }
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.filter}
          onSelectFilter={this.onChangeFilter.bind(this)} />
        <Portfolio projects={this.filterProjects()} />
      </div>
    );
  }
}
