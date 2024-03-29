import s from './TenderCards.module.scss';
import React, {useState} from "react";
import {setFull} from "../redux/reducer";
import {useDispatch} from "react-redux";

const TenderCards = ({tenders,FullState}) => {

    const dispatch = useDispatch();
    const [buttonText, setButtonText] = useState('Раскрыть карточки');
    const handleClickFull = () => {
        dispatch(setFull());
        setButtonText(FullState ? 'Раскрыть карточки' : 'Скрыть');
    }


    return (
        <div>
                       {FullState ? tenders.map(tender => (
                <div key={tender.id} className={s.tenderCard}>
                    <div className={s.tenderHeader}>
                        <div className={s.tenderNumber}>№ {tender.id}</div>
                        <div className={s.tenderStatus}>{tender.status}</div>
                        <div className={s.tenderType}>{tender.stage}</div>
                    </div>
                    <a className={s.tenderTitle} href={tender.link}>{tender.title}</a>
                    <div className={s.container}>
                        <div className={s.tenderDescription}>
                            <a>Тип</a>
                            <a>Регионы</a>
                            <a>Заказчики</a>
                            <a>Оператор</a>
                        </div>
                        <div className={s.tenderDetails}>
                            <div className={s.tenderText}>{tender.type}</div>
                            <div className={s.tenderText}>{tender.regionName}</div>
                            <div className={s.tenderText}>{tender.company}</div>
                            <div className={s.tenderText}>{tender.sourceName}</div>
                        </div>
                        <div className={s.tenderInfo}>
                            <a>Начальная цена</a>
                            <div className={s.tenderStartPrice}>{tender.startPrice} ₽</div>
                            <a>Подача заявок до:</a>
                            <div className={s.tenderApplicationDeadline}>{tender.deadlineDateTime}</div>
                            <a>Дата публикации:</a>
                            <div className={s.tenderPublicationDate}>{tender.publicationDateTime}</div>
                        </div>
                    </div>
                </div>
            )) : tenders.map(tender => (
                <div key={tender.id} className={s.tenderCard}>
                    <div className={s.tenderHeader}>
                        <div className={s.tenderNumber}>№ {tender.id}</div>
                        <div className={s.tenderStatus}>{tender.status}</div>
                        <div className={s.tenderType}>{tender.stage}</div>
                    </div>
                    <a className={s.tenderTitle} href={tender.link}>{tender.title}</a>
                    <div className={s.container}>
                        <div className={s.tenderDescription}>
                            <a>Тип</a>
                            <a>Регионы</a>
                            <a>Заказчики</a>
                            <a>Оператор</a>
                        </div>
                        <div className={s.tenderDetails}>
                            <div className={s.tenderText}>{tender.type}</div>
                            <div className={s.tenderText}>{tender.regionName}</div>
                            <div className={s.tenderText}>{tender.company}</div>
                            <div className={s.tenderText}>{tender.sourceName}</div>
                        </div>
                        <div className={s.tenderInfo}>
                            <a>Начальная цена</a>
                            <div className={s.tenderStartPrice}>{tender.startPrice} ₽</div>
                            <a>Подача заявок до:</a>
                            <divs className={s.tenderApplicationDeadline}>{tender.deadlineDateTime}</divs>
                            <a>Дата публикации:</a>
                            <div className={s.tenderPublicationDate}>{tender.publicationDateTime}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TenderCards;