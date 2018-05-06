'use strict';

function Stars({count}) {
let stars = Array.from({length: count}).map(() => <Star />);
  // for (let i = 0; i < count; i++) {
  //   stars.push(<Star />)
  // }
  
  return <ul className="card-body-stars u-clearfix"><li>{stars}</li></ul>;
}
