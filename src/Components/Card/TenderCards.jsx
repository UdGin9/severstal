import React from 'react';
import s from './TenderCards.module.scss';

const TenderCards = ({tenders}) => {

    return (
        <div>
            {tenders.map(tender => (
                <div key={tender.number} className={s.tenderCard}>
                    <div className={s.tenderHeader}>
                        <div className={s.tenderNumber}>№ {tender.number}</div>
                        <div className={s.tenderStatus}>{tender.status}</div>
                        <div className={s.tenderType}>{tender.tenderType}</div>
                    </div>
                    <a className={s.tenderTitle} href={tender.tenderLink}>{tender.title}</a>
                    <div className={s.container}>
                        <div className={s.tenderDescription}>
                            <a>Тип</a>
                            <a>Регионы</a>
                            <a>Заказчики</a>
                            <a>Оператор</a>
                        </div>
                        <div className={s.tenderDetails}>
                            <div className={s.tenderText}>{tender.type}</div>
                            <div className={s.tenderText}>{tender.regions}</div>
                            <div className={s.tenderText}>{tender.customers}</div>
                            <div className={s.tenderText}>{tender.operator}</div>
                        </div>
                        <div className={s.tenderInfo}>
                            <a>Начальная цена</a>
                            <div className={s.tenderStartPrice}>{tender.startPrice} ₽</div>
                            <a>Подача заявок до:</a>
                            <div className={s.tenderApplicationDeadline}>{tender.applicationDeadline}</div>
                            <a>Дата публикации:</a>
                            <div className={s.tenderPublicationDate}>{tender.publicationDate}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TenderCards;