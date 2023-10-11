import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)
const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

//appserver endpoint
// const URI = 'http://15.207.14.101:8080'
const URI = 'http://localhost:8181/api/v1/auth'

//endpoint 1
// const getProduct = () => axios.get(`${URI}/product/get`)
// const getProductbyId = (id) => axios.get(`${URI}/product/find/${id}`, { headers })
// const addProduct = (product) => axios.post(`${URI}/product/add`, product, { headers })
// const editProduct = (id, product) => axios.put(`${URI}/product/edit/${id}`, product, { headers })
// const deleteProduct = (id) => axios.delete(`${URI}/product/delete/${id}`, { headers })

// const getUser = () => axios.get(`${URI}/user/get`, { headers })
// const getUserbyId = (id) => axios.get(`${URI}/user/find/${id}`, { headers })
// const editUser = (id, product) => axios.put(`${URI}/user/edit/${id}`, product, { headers })
// const deleteUser = (id) => axios.delete(`${URI}/user/delete/${id}`, { headers })

const userLogin = (signin) => axios.post(`${URI}/login`, signin)
// const userRegister = (register) => axios.post(`${URI}/auth/register`, register)
// const adminLogin = (signin) => axios.post(`${URI}/auth/login`, signin)

const userRegister =(signup) => axios.post(`${URI}/register`,signup)






export { userLogin ,userRegister }
// export { getProduct, getProductbyId, addProduct, editProduct, deleteProduct, getProductCount, getFeedback, addFeedback, deleteFeedback, getFeedbacktCount, getUser, getUserbyId, editUser, deleteUser, getUserCount, adminLogin,userLogin,userRegister,addOrder,getUserOrders,getOrderCount }