class App extends React.Component {

	render() {
		const labels = ['France', 'Italy', 'England', 'Sweden', 'Germany']

		return (
			<section>
				<Charts />
				<Charts type="stacked"/>
				<Charts type="layered"/>
				<Charts labels={labels} allign="horizontal"/>
			</section>
		);
	}
}
