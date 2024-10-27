// import clsx from 'clsx';
import s from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={s.wrapper}>
      <div className={s.userInfo}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.userName}>@{tag}</p>
        <p className={s.location}> {location}</p>
      </div>
      <ul className={s.profileList}>
        <li className={s.profileListItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.profileListItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={s.profileListItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
