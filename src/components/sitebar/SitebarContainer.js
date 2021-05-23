import {connect} from "react-redux";

import Sitebar from "./Sitebar";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

const SitebarContainer = connect(mapStateToProps)(Sitebar);

export default SitebarContainer;