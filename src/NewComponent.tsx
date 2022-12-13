import React from 'react';

type NewComponentType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            <tr>
                {props.topCars.map((objectFromTopCarsArr, index) => {
                    return (
                        <th key={index}>
                            <span>{objectFromTopCarsArr.manufacturer}</span>

                            <span>model: {objectFromTopCarsArr.model}</span>
                        </th>
                    )
                })}
            </tr>
        </table>
        /*<ul>
            {props.topCars.map((objectFromStudentArray, index) => {
                return (
                                <li key={objectFromStudentArray.id}>
                    <span>{objectFromStudentArray.name}</span>
                    <span>age: {objectFromStudentArray.age}</span>
                </li>
                )
            })}

        </ul>*/
    )
}

