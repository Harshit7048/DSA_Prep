import type { User } from "../data/userData";

type profileLookProps = {
  user: User;
};

export default function ProfileLook({ user }: profileLookProps) {
  //   console.log(user.name, user);
  return (
    <div className='profile-look'>
      <img src={`${user.profileImg}`} alt='profile' />
      <span>{user.name}</span>
    </div>
  );
}
