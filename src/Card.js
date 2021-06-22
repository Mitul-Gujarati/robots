import React from 'react';

const  Card = ({Name , email, id}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src= {`https://robohash.org/${id}200*200`} />
            <div>
                <h2>{Name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;