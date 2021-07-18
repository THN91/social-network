import React from "react";
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='Enter your messange'
                    component={'textarea'}
                    name={'newPost'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default PostReduxForm;