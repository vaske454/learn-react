import { getImageUrl } from './utils.js';

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
function Avatar(props) {
    let person = props.person;
    let size = props.size;
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}







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
