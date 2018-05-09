const TextRenderLine = ({ value, onChange }) => {
	return (
		<div className="type-text">
			<textarea
				name="text"
				id="font-text"
				value={value}
				onChange={(e) => {onChange(e.target.value)}}
				cols="30"
				rows="2"
				placeholder="Введите текст для футболки">
			</textarea>
		</div>
	);
};
