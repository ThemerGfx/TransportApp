import axios from 'axios'

let allArticles = []

export const createArticle = (article) => { 
  return (dispatch) => { 
      axios.post('http://192.168.1.2:3000/articles', article)
        .then((res) => {
          if (res.status === 2000) {
            this.setState((prevState) => {
              return {
                ...prevState,
                allArticles: [...prevState.allArticles, {...this.state}]
              }
            })
          }
          console.log(agent)
        })
        .then(() => {
          dispatch({
            type: "add_article"
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

// export const removeStudent = (item) => {
//   return (dispatch) => {
//     axios.delete('http://localhost:5000/deleteone/' + item._id, item)
//     .then((res) => {
//         if(res.status === 200) {
//             this.setState((prevState) => {
//                 return {
//                     ...prevState,
//                     allAgents: prevState.allAgents.filter((student) => student._id !== item._id)
//                 }
//             })
//         }
//     })
//     .catch((err) => console.log('error from delete: ',err))
//   }
// }

// export const selectStudent = (student) => {
//   return {
//     type: "EDIT_STUDENT_ITEM",
//     student
//   }
// }

// export const updateStudent = (student) => {
//   return (dispatch) => {
//     axios.put(`http://localhost:5000/modifyone/${student._id}`, { ...student })
//     .then(() => {
//       dispatch({
//         type: "UPDATE_STUDENT"
//       })
//     })
//     .catch((err) => console.log(err))
//   }
// }

// export const getAllAgents = () => {
//     return (dispatch) => {
//       fetch("http://localhost:8080/Agents")
//       .then((res) => 
//         res.json()
//       )
//       .then((res) => {
//         dispatch(getAllAgentsSuccess(res))
//         return allAgents
//       })
//       .catch((err) => console.log("error adding agent: ", err))
//     }
// }
// export const getAllAgentsSuccess = (allAgents) => (
//   {
//     type:'GET_ALL_AGENTS_SUCCESS',
//     payload: allAgents
//   }
// )