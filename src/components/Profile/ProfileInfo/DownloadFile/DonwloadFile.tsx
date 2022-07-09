import s from './DonwloadFile.module.css'
import add from './img/0e89ccedef7fdb65b6d529e2ee33fc56.svg'

export const DownloadFile=()=>{

    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function () {
            let countFiles = '';
            if (input.files && input.files.length >= 1)
                countFiles = input.files.length;

            if (countFiles)
                label.querySelector('.input__file_button_text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file_button_text').innerText = labelVal;
        });
    });

    return(
        <div className="input__wrapper">
            <input name="file" type="file" id="input__file" className={s.input__file} multiple/>
                <label htmlFor="input__file" className={s.input__file_button}>
                    <span className={s.input__file_icon_wrapper}>
                        <img className={s.input__file_icon} src={add} alt="Выбрать файл" width="25"/>
                    </span>
                    <span  className={s.input__file_button_text}>Выберите файл</span>
                </label>
        </div>
    )
}