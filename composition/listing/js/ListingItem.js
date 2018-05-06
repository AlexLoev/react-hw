const ListingItem = (item) => {
    var color = "black";
    switch (item.type) {
        case 'unisex': color = "black"; break;
        case 'male': color = "blue"; break;
        case 'female': color = "orange"; break;
    }
    return <Item color={color} item={item} />;
}