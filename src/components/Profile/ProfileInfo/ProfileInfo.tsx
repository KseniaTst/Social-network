import clP from "../Profile.module.css";
import s from './ProfileInfo.module.css';
export const ProfileInfo=()=>{
    return (
<div className={clP.content}>
    <div>
        <img className={clP.img } src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
    </div>
    <div className={s.description}>ava+descr</div>

</div>

)
}