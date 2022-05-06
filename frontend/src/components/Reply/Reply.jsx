import React from 'react';
import "./Reply.css"


const Reply = (props) => {
    return ( 
        <div className="reply d-flex flex-column justify-content-end" >
            <p>
                {props.user}
            </p>
            <textarea className="border border-white rounded">
                {props.textBody}
            </textarea>
        </div>

     );
}
 
export default Reply;