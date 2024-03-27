import React from 'react';
import Header from "../../Header/Header";
import TenderCards from "../../Card/TenderCards";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/reducer";
import Loader from "../../../UI/loader";
const TendersPage = ({Tenders}) => {

    return (
        <div>
            <Header/>
            {Tenders ? <div>
                <TenderCards tenders={Tenders} />
                {/*<Paginator pages={pages} pressHandler={changePage} page={currentPage} next={next} prev={prev}/>*/}
            </div> : <Loader/>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    Tenders: state.Tenders,
    isFetching: state.isFetching,
    names : state.names,
})

export const TendersPageContainer = connect(mapStateToProps,{toggleIsFetching})(TendersPage)