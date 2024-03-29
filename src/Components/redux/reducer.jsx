import {DOWNLOAD_TENDERS, TOGGLE_IS_FETCHING, DOWNLOAD_NAME, STATE_FULL} from "../../consts";

const initialState = {
    Tenders: [
    {
        id: 1,
        status: "Подача заявок",
        stage: "Торги без ЭП",
        title: "Поставка оборудования (Микроскоп цифровой) в целях создания на базе общеобразовательных организаций детских технопарков \"Кванториум\" в рамках регионального проекта \"Современная школа (Астраханская область)",
        link: "https://etpgpb.ru/procedure/tender/price_request/590295-postavka-oborudovaniya-mikroskop-tsifrovoy-v-tselyah-sozdaniya-na-baze-obscheobrazovatelnyh-organizatsiy-detskih-/",
        type: "Ценовой запрос",
        regionName: "Саратовская область",
        company: "ГАУЗ ЭГКБ № 1",
        sourceName: "ТЗП Татнефть",
        startPrice: 310000,
        publicationDateTime: "25 марта 2024",
        deadlineDateTime: "15 марта 2024"
    },
    {
        id: 2,
        status: "Подача заявок",
        stage: "Торги без ЭП",
        title: "Поставка оборудования (Микроскоп цифровой) в целях создания на базе общеобразовательных организаций детских технопарков \"Кванториум\" в рамках регионального проекта \"Современная школа (Астраханская область)",
        link: "https://etpgpb.ru/procedure/tender/price_request/590295-postavka-oborudovaniya-mikroskop-tsifrovoy-v-tselyah-sozdaniya-na-baze-obscheobrazovatelnyh-organizatsiy-detskih-/",
        type: "Ценовой запрос",
        regionName: "Саратовская область",
        company: "ГАУЗ ЭГКБ № 1",
        sourceName: "ТЗП Татнефть",
        startPrice: 310000,
        publicationDateTime: "25 марта 2024",
        deadlineDateTime: "15 марта 2024"
    },
        {
            id: 3,
            status: "Подача заявок",
            stage: "Торги без ЭП",
            title: "Поставка оборудования (Микроскоп цифровой) в целях создания на базе общеобразовательных организаций детских технопарков \"Кванториум\" в рамках регионального проекта \"Современная школа (Астраханская область)",
            link: "https://etpgpb.ru/procedure/tender/price_request/590295-postavka-oborudovaniya-mikroskop-tsifrovoy-v-tselyah-sozdaniya-na-baze-obscheobrazovatelnyh-organizatsiy-detskih-/",
            type: "Ценовой запрос",
            regionName: "Саратовская область",
            company: "ГАУЗ ЭГКБ № 1",
            sourceName: "ТЗП Татнефть",
            startPrice: 310000,
            publicationDateTime: "25 марта 2024",
            deadlineDateTime: "15 марта 2024"
        },

    ],

    names : [
        {
            "id": 1,
            "name" : "Евгений",
        },
        {
            "id": 2,
            "name": "Андрей",
        },
        {
            "id": 3,
            "name": "Иван",
        },
    ],
    productItems: [
        {
            "id": 1,
            "title": "Арматура листовая",
            "count": 3,
            "measureUnit": "шт",
            "description": "ГОСТ 534",
            "deliveryAddress": "Самара ули.."
        },
        {
            "id": 2,
            "title": "Гвозди",
            "count": 5,
            "measureUnit": "шт",
            "description": "ГОСТ 123",
            "deliveryAddress": "Самара ули.."
        }
    ],
    documents: [
        {
            "id": 1,
            "title": "Соглашение",
            "link": "htpp://doc",
            "description": "В данном доку..."
        },
        {
            "id": 2,
            "title": "Договор",
            "link": "htpp://vor",
            "description": "В данном доку..."
        }
    ],
    isFetching: false,
    FullState : false,
}



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case DOWNLOAD_TENDERS:
            return {...state, Tenders: action.Tenders}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case DOWNLOAD_NAME:
            return {...state, isFetching: action.isFetching}
        case STATE_FULL:
            return {...state, FullState: !action.FullState}
        default:
            return state
    }
}

export const downloadTenders = (Tenders) => ({type: DOWNLOAD_TENDERS, Tenders})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const downloadNames = (names) => ({type: DOWNLOAD_NAME,names})
export const setFull = (FullState) => ({type: STATE_FULL,FullState})

