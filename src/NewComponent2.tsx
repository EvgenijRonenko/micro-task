import React from 'react';

export type NewComponent2Type = {
    money: Array<MoneyType>
    currentMoney: Array<MoneyType
    onClickFilterHandler:()=>void
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}



export const NewComponent2 = (props: NewComponent2Type) => {
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

