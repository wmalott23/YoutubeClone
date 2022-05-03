import React, { useState } from 'react';

const SearchResult = ({video_id, thumbnail, description, title}) => {
    return ( 
        <div>
            {video_id}
            {thumbnail}
            {description}
            {title}
        </div>
     );
}
 
export default SearchResult;