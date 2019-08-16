import React from 'react'

interface IPropTypes {
    name: string
}
interface IStateTypes {
    value: number
}

class Counter extends React.Component<IPropTypes, IStateTypes> {
    constructor(props: IPropTypes) {
        super(props);
    }
}
export default Counter
