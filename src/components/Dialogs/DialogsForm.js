import React from "react";
import {Field, reduxForm} from "redux-form";

import s from "./Dialogs.module.css";

const AddMessangeForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit} className={s.newMessange}>
            <Field
                placeholder='Enter your messange'
                component={'textarea'}
                name={'newMessangeBody'}
            />
            <button>send messange</button>
        </form>
    )
};

const DialogsReduxForm = reduxForm({form: "dialogAddMessangeForm"})(AddMessangeForm);

export default DialogsReduxForm;