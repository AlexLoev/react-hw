const FontSelector = ({ fonts, selectedFont, onSelect }) => {
    return (
        <div className="font-picker">
            {fonts.map(font => {
                return (
                    <div key={font.name} className="grid center font-item">
                        <input
                            type="radio"
                            name="font"
                            defaultChecked={selectedFont && font.name == selectedFont.name}
                            value={font.name}
                            id={font.path}
                            onChange={(event) => {
                                onSelect({
                                    name: event.target.value,
                                    path: event.target.id
                                })
                            }} />
                        <label htmlFor="abc1" className="grid-1">
                            <PictureFont text={font.name.slice(0, 3)} path={font.path} />
                        </label>
                    </div>
                )
            }
            )}
        </div>
    )
};