import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Routes from "./scenes/routes";
import fetchUsersStatisticAction from "./actions/fetchUsersStatistic";


function App({ fetchStatistic }) {

    useEffect(() => {
        fetchStatistic();
    },[])

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <Routes />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatistic: () => dispatch(fetchUsersStatisticAction())
    }
}

export default connect(null, mapDispatchToProps)(App);
