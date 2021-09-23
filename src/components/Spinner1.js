import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner1 extends Component {
    render() {
        return (
            <div className="text-center mt-3">
                <img className="my-3" src={loading} alt="Loading" />
            </div>
        )
    }
}

export default Spinner1

// import React, { Component } from 'react'

// export class Spinner1 extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="d-flex justify-content-center">
//                     <div className="spinner-border text-primary" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Spinner1
