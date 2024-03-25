import {DOWNLOAD_TENDERS,TOGGLE_IS_FETCHING} from "../../consts";


const initialState = {
    Tenders: [
    {
        number: 1,
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
    },
    {
        number: 2,
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
    },
        {
            number: 3,
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
        },

    ],
    isFetching: false,
}



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case DOWNLOAD_TENDERS:
            return {...state, Tenders: action.Tenders}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const downloadTenders = (Tenders) => ({type: DOWNLOAD_TENDERS, Tenders})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
