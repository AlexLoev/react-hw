const SearchBox = (props) => {
    return (
        <input
            type="text"
            placeholder="Поиск по названию или автору"
            value={props.value}
            onChange={(e) => props.filterBooks(e.target.value)}
        />
    );
};