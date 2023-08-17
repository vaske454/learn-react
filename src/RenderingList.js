// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];
//
//
//
//
// export default function RenderingList() {
//     const listItems = people.map(person => <li>{person}</li>);
//
//     return <ul>{listItems}</ul>;
// }


import { people } from './data.js';
import { getImageUrl } from './utils.js';
import './list.css';

export default function RenderingList() {
    // const chemists = people.filter(person =>
    //     person.profession === 'chemist'
    // );
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}