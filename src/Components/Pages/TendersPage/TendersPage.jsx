import React from 'react';
import Header from "../../Header/Header";
import TenderCards from "../../Card/TenderCards";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/reducer";
import Loader from "../../../UI/loader";
import Filters from "../../Filters/Filters";

const TendersPage = ({Tenders,isFetching,FullState}) => {


    return (
        <div>
            <Header/>
            <Filters/>
            {isFetching ? <Loader/> : <div>
                <TenderCards tenders={Tenders} />
                {/*<Paginator pages={pages} pressHandler={changePage} page={currentPage} next={next} prev={prev}/>*/}
            </div>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    Tenders: state.Tenders,
    isFetching: state.isFetching,
    names : state.names,
    FullState: state.FullState,
})

export const TendersPageContainer = connect(mapStateToProps,{toggleIsFetching})(TendersPage)