function Legend(props) {
    return (
        <div className="Legend">
            {props.labels.map((label, labelIndex) => {
                return (
                    <div>
                        <span className="Legend--color" style={{ backgroundColor: props.colors[labelIndex % props.colors.length] }} />
                        <span className="Legend--label">{label}</span>
                    </div>
                );
            })}
        </div>
    )
}