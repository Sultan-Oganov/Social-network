import a1 from '../../img/1.jpg'
import a2 from '../../img/2.png'
import a3 from '../../img/3.jpg'
import a4 from '../../img/4.jpg'
import a5 from '../../img/5.png'
import a6 from '../../img/6.jpg'
import a7 from '../../img/7.png'

let initialState = {
    friends: [
        { name: 'Oleg', img: a5 },
        { name: 'Kostya', img: a3 },
        { name: 'Sasha', img: a4 },
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state
}

export default sidebarReducer