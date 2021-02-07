import React from 'react';
import Classes from './List.module.scss';


const ListItem = (props) => {
    return(
        <li className = {Classes.ListItem}>{props?.listItem}</li>
    )
}


const List = (props) => {

    const renderData = () => {
        const dataJsx = props.data.map((element, index) => {
            return <ListItem listItem = {element}/>
        })

        return (props.data) ?
            (
                <ul className={Classes.ListStyles}>
                    {dataJsx}
                </ul>
            ) :
            null;
    }

    return (
        <div className={Classes.List}>
            {renderData()}
        </div>
    )
}



export default List;