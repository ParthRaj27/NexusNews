// import React, { Component } from "react";
// import NewsItem from "./NewsItem";

// export default class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//   }
//   async componentDidMount() {
//     let url =
//       "https://newsapi.org/v2/top-headlines?country=in&apiKey=430364c2ab074442b2b59db54dca3789?page=1";
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({ articles: parsedData.articles });
//   }

//   render() {
//     return (
//       <div className="container">
//         <h1>NewsMonkey - Top Headlines</h1>
//         <div className="row">
//           {this.state.articles.map((Element) => {
//             return (
//               <div className="col-md-4" key={Element.url}>
//                 <NewsItem
//                   title={Element.title}
//                   description={Element.description}
//                   ImageUrl={Element.urlToImage}
//                   newsurl={Element.url}
//                 />
//                 {/* <NewsItem  title={Element?Element.title.slice(0,20):""} description={Element?Element.description.slice(0,50):""} ImageUrl={Element.urlToImage} newsurl={Element.url}/> */}
//               </div>
//             );
//           })}
//         </div>
//         <div className="container">
// <button className="btn btn-primary">next</button>
// <button className="btn btn-primary">previous</button>
//         </div>
//       </div>
//     );
//   }
// }





// App.js
// from 'react'
// import Navbar from './components/Navbar'
// import News from './components/News'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // Switch may be not working after updation i think routes is the new function
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//          <Router>
//           <Navbar />
//           <Routes>
//             <Route exact path='/'><News pageSize={6} country="in" category="General"/></Route>
//             <Route exact path='/Business'><News pageSize={6} country="in" category="Business"/></Route>
//             <Route exact path='/Entertainment'><News pageSize={6} country="in" category="Entertainment"/></Route>
//             <Route exact path='/General'><News pageSize={6} country="in" category="General"/></Route>
//             <Route exact path='/Health'><News pageSize={6} country="in" category="Health"/></Route>
//             <Route exact path='/Science'><News pageSize={6} country="in" category="Science"/></Route>
//             <Route exact path='/Sports'><News pageSize={6} country="in" category="Sports"/></Route>
//             <Route exact path='/Technology'><News pageSize={6} country="in" category="Technology"/></Route>
//             </Routes>
//        </Router>
//       </div>
//     )
//   }
// }
// {/* <Route exact path='/Technology'><News pageSize={6} country="in" category="Technology"/></Route> </Routes> */}