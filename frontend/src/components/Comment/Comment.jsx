import React, { useState } from 'react';

const Comment = (props) => {
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
 
export default Comment;