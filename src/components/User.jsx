import { Link } from 'react-router-dom';

export const firstLastName = (user) => (
  user ? `${user.displayName.split(' ')[0]} ${user.displayName.split(' ')[1]}` : 'Unknown user'
);

const printEmail = (user) => (
    user ? user.email : 'Unknown Email'
)
const User = ({profile, user}) => {
    return(
  <div>
    <h3>
      { firstLastName(user) }  
      { 
        profile?.isAdmin && 
        <Link to={`/edit`} style={{fontSize: '0.7em', marginLeft: '2em'}}>
          <i className="bi bi-pencil"></i>
        </Link> }
      </h3>
    <p>Email: {printEmail(user)}</p>
  </div>
);
      }
export default User;