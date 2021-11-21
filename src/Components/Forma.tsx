import './Forma.css'
import Login from './Forma/Login/Login';
import Register from './Forma/Register/Register';
import { FlipCard } from './FlipCard.tsx/FlipCard';


export const Forma = () => {
    return (
        <div className="index-site">
            {/* <div className="index-register" > */}
                <FlipCard
                    link="Register"
                    BackComponent={<Register />} />
            {/* </div> */}
            {/* <div className="index-login"> */}
                <FlipCard
                    BackComponent={<Login />}
                    link="Login" />
            {/* </div> */}
        </div>
    )
}




{/* <div className="form-container">

     
<div className="logo">
  <Glee/>
</div>
<p className="title-text">Create Your account</p>

<form>
<div className="form-row">
    <label htmlFor="User Name" id="userName">User Name</label>
    <input id="User Name" type="text" />
</div>

<div className="form-row">
    <label htmlFor="User Name" id="userName">User Name</label>
    <input id="User Name" type="text" />
</div>

<div className="form-row">
    <label htmlFor="User Name" id="userName">User Name</label>
    <input id="User Name" type="text" />
</div>
</form>
</div> */}