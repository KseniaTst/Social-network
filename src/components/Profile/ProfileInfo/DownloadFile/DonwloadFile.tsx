import s from './DonwloadFile.module.css'
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import {ChangeEvent} from "react";

type PropsType={
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const DownloadFile=(props:PropsType)=>{

   return(
       <label className={s.chooseFile}>
           <LocalSeeIcon fontSize={'large'}/>
           <input type={'file'} hidden onChange={props.onChange} />
       </label>
   )
}