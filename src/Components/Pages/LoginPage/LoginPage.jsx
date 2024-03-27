import { useNavigate } from 'react-router-dom';
import s from "./LoginPage.module.scss"
import {TENDERS_PAGE} from "../../../consts";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/reducer";

const LoginPage = ({names}) => {
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        /*setName(event.target.value);*/
    };

    const handleSkipOrGoNext = () => {
        navigate(TENDERS_PAGE);
        // Сохранение имя в редакс и отправляем на сервер, получаем имена
    };

    return (
        <div className={s.page}>
            <div className={s.card}>
                <h1>Выберите имя</h1>
                <select onChange={handleNameChange}>
                    {
                        names.map(el => (
                            <option key={el.id}>{el.name}</option>
                        ))
                    }
                </select>
                <button onClick={handleSkipOrGoNext} className={s.button}>
                    Пропустить или перейти далее
                </button>
            </div>
        </div>

    );
};

const mapStateToProps = (state) => ({
    Tenders: state.Tenders,
    isFetching: state.isFetching,
    names : state.names,
})

export const LoginPageContainer = connect(mapStateToProps,{toggleIsFetching})(LoginPage)
