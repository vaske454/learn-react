// import { getImageUrl } from './utils.js';

//moze i ovako
// function Avatar({ person, size = 100 }) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

//preferiram ovo, sem ako ne zelis da das default vrednost za neki props
// function Avatar(props) {
//     let person = props.person;
//     let size = props.size;
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }
//
// export default function Profile() {
//     return (
//         <div>
//             <Avatar
//                 size={100}
//                 person={{
//                     name: 'Katsuko Saruhashi',
//                     imageId: 'YfeOqp2'
//                 }}
//             />
//             <Avatar
//                 size={80}
//                 person={{
//                     name: 'Aklilu Lemma',
//                     imageId: 'OKS67lh'
//                 }}
//             />
//             <Avatar
//                 size={50}
//                 person={{
//                     name: 'Lin Lanying',
//                     imageId: '1bX5QH6'
//                 }}
//             />
//         </div>
//     );
// }






//You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
// function TestChild(props) {
//     let firstName = props.person.firstName;
//     let lastName = props.person.lastName;
//     return (
//         <>
//             <h2>{firstName + ' ' + lastName}</h2>
//         </>
//     );
//
// }
//
// function Test(props) {
//     return (
//         <>
//             <TestChild {...props} />
//         </>
//     );
// }
// export default function Profile() {
//     return (
//         <div>
//             <Test
//              person={{
//                  firstName: 'Vasilije',
//                  lastName: 'Tomovic'
//              }}
//             />
//         </div>
//     );
// }




//Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
import Avatar from './Avatar.js';

//mora da se zove children!
function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

