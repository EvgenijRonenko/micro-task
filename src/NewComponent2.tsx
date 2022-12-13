import React from 'react';

export const NewComponent2 = () => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index)=> {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={()=>onClickFilterHandler('all')}>all</button>
            <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
        </>
    )
}

