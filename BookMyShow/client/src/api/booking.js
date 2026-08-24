import api from "./index.js";

export const makePayment = async (token, amount) => {
 try {
   const response = await api.post("/bookings/make-payment", {
     token,
     amount,
   });
   // console.log(token, amount, response);
   return response.data;
 } catch (err) {
   return err.response;
 }
};


export const bookShow = async (payload) => {
 try {
   const response = await api.post(
     "/bookings/show",
     payload
   );
   console.log(response.data);
   return response.data;
 } catch (err) {
   return err.response;
 }
};


export const getAllBookings = async (payload) => {
 try {
   const response = await api.get(
     `/bookings/all/${payload.userId}`
   );
   return response.data;
 } catch (err) {
   return err.response;
 }
};