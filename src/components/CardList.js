import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
    return (
        <React.StrictMode>
            {
                robots.map((user, index) => {
                    return (<Card key={index} 
                        name={robots[index].name} 
                        username={robots[index].username}
                        email={robots[index].email} 
                        id={robots[index].id}/>
                    )
                })
            }
        </React.StrictMode>
    )
}

export default CardList