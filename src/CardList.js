import React from 'react';
import Card from './Card';
import { robots } from './robots';

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user,i) => {
                    return(
                        <Card
                        key={i}
                        id={robots[i].id}
                        Name={robots[i].Name}
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
} 

export default CardList;