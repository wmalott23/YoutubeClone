import React from 'react';


const Reply = (props) => {
    return ( 
        <div>
            <p>
                {props.user}
            </p>
            <textarea>
                {props.textBody}
            </textarea>
        </div>

     );
}
 
export default Reply;