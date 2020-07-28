import React, { useEffect, useState } from 'react';
import './allblogs.css'
import { Link } from 'react-router-dom';



// class AllBlogs extends React.Component {
//   state = {

//     blog: []

//   }
//   async componentDidMount() {
//     const url = await ('http://localhost:8081/api/showall')
//     const response = await fetch(url);
//     const result = await response.json();
//     this.setState({ blog: result.data.blog })
//     console.log(this.state.blog);
//   }

//   render() {
//     const { blog } = this.state;
//     return (
//       <section id='blogs'>
//         <div className="card-group">
//           {blog.reverse().map((blog) => {
//             return (
//               <div className='row' key={blog.id}>
//                 <div className='col-lg-4 col-md-4 col-sm-12'>
//                   <div className="card" style={{ width: '18rem' }}>
//                     <img className="card-img-top" src={blog.uri} alt="Card cap" />
//                     <div className="card-bodie">
//                       <h5 className="card-title">{blog.title}</h5>
//                       <p className="card-text">{blog.description}</p>
//                       <button target='_blank' className="btn btn-success">Read more</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//         <div className='back-button'>
//           <Link to='/'><img src={process.env.PUBLIC_URL + '/assets/icons/arrow-left-circle.svg'} alt='Go home' /></Link>

//         </div>
//       </section>
//     )
//   }
// }
// export default AllBlogs;


const AllBlogs = () => {
  const [hasError, setErrors] = useState(false);
  const [allblogs, setAllBlogs] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:8081/api/showall");
    res
      .json()
      .then(res => setAllBlogs(res.data))
      .catch(err => setErrors(err));
  }

  useEffect(() =>{
    fetchData();

  }, []);
  
  console.log(allblogs);
  
  return (
    <h1>Hola</h1>
        // <section id='blogs'>
        //       <div className="card-group">
        //         {allb.reverse().map((blog) => {
        //         return (
        //           <div className='row' key={blog.id}>
        //             <div className='col-lg-4 col-md-4 col-sm-12'>
        //               <div className="card" style={{ width: '18rem' }}>
        //                 <img className="card-img-top" src={blog.uri} alt="Card cap" />
        //                 <div className="card-bodie">
        //                   <h5 className="card-title">{blog.title}</h5>
        //                   <p className="card-text">{blog.description}</p>
        //                   <button target='_blank' className="btn btn-success">Read more</button>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         )
        //       })}
        //     </div>
        //     <div className='back-button'>
        //       <Link to='/'><img src={process.env.PUBLIC_URL + '/assets/icons/arrow-left-circle.svg'} alt='Go home' /></Link>

        //     </div>
        //   </section>
    
  );

};

export default AllBlogs;



