// import React,{useState} from 'react'
// import PropTypes from 'prop-types';

// export default function Alert(props) {
//   const[none,setNone] = useState(null);
//   const showdone = (message,type)=>{
//      setNone({
//          msg:message,
//          type:type,
//      })
//   };
//   return (
//   <>
//    prop.none && <div>
//       <div
//         className="alert alert-warning alert-dismissible fade show"
//         role="alert"
//       >
//         <strong>{props.none.msg}</strong>:{props.none.type}
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="alert"
//           aria-label="Close"
//         ></button>
//       </div>
//       <button className='btn btn-danger' onclick={showdone}>danger</button>
//     </div>
//     </>
//   )
// }
