'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{ marginBottom: '10px' }}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle} />
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg',
}

Profile.propTypes = {
  url: profileURLPropType,
  birthday: birthdayPropType,
  first_name: PropTypes.string,
  last_name: PropTypes.string
}

const profileURLPropType = (props, propName, componentName) => {
  let profileURL = props[propName];
  let isVkSrc = (typeof profileURL === 'string') &&
    /^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(profileURL);
  if (!isVkSrc) {
    return new Error(`Неверно указан URL: ${props[propName]} 
    в параметре ${propName} компонента ${componentName}
    Адрес должен быть адресом VK https://vk.com/`);
  }
  return null;
}

const birthdayPropType = (props, propName, componentName) => {
  let birthday = props[propName];
  let isBirthday = (typeof birthday === 'string') &&
    /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(birthday);
  if (!isBirthday) {
    return new Error(`Неверно указана дата рождения: ${props[propName]} 
    в параметре ${propName} компонента ${componentName}
    Дата должна быть указана в формате YYYY-MM-DD и существовать в календаре.`);
  } else {
    let today = new Date();
    today.setHours(0,0,0,0);
    birthday = new Date(birthday);
    if (birthday >= today) {
      return new Error(`Неверно указана дата рождения: ${props[propName]} 
      в параметре ${propName} компонента ${componentName}
      Дата должна быть меньше текущей.`);      
    }
  }
  return null;
}



