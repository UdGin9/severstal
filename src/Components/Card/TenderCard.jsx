import React from 'react';
import s from './TenderCard.module.scss';

const TenderCard = () => {

    const tender = {
        number: 3123123123,
        status: "Подача заявок",
        tenderType: "Торги без ЭП",
        title: "Поставка оборудования (Микроскоп цифровой) в целях создания на базе общеобразовательных организаций детских технопарков \"Кванториум\" в рамках регионального проекта \"Современная школа (Астраханская область)",
        tenderLink: "https://etpgpb.ru/procedure/tender/price_request/590295-postavka-oborudovaniya-mikroskop-tsifrovoy-v-tselyah-sozdaniya-na-baze-obscheobrazovatelnyh-organizatsiy-detskih-/",
        type: "Ценовой запрос",
        regions: "Саратовская область",
        customers: "ГАУЗ ЭГКБ № 1",
        operator: "ТЗП Татнефть",
        startPrice: 310000,
        applicationDeadline: "25 марта 2024",
        publicationDate: "15 марта 2024"
    }



    return (
        <div className={s.tenderCard}>
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
    );
};

export default TenderCard;