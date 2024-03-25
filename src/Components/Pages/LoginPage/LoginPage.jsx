import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from "./LoginPage.module.scss"
import {TENDERS_PAGE} from "../../../consts";

export const LoginPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSkipOrGoNext = () => {
        navigate(TENDERS_PAGE);
        // Сохранение имя в редакс и отправляем на сервер, получаем имена
    };

    return (
        <div className={s.page}>
            <div className={s.card}>
                <h1>Выберите имя</h1>
                <select value={name} onChange={handleNameChange}>
                    <option value="">Выберите имя</option>
                    <option value="Иван">Иван</option>
                    <option value="Петр">Петр</option>
                    <option value="Мария">Мария</option>
                </select>
                <button onClick={handleSkipOrGoNext} className={s.button}>
                    Пропустить или перейти далее
                </button>
            </div>
        </div>

    );
};
