//temp data storage -> reset whwnver server is restarted
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jim"},
];

const getAllUsers = (req,res) => {
    const updatedUsers = users.map((user) => {
         return {
             id: user.id,
             name: user.name,
             email: "john@example.com"
         }
     });
     res.json({
         message: "Users fetched successfully",
         data: updatedUsers
     });
 }

 module.exports = {
    getAllUsers
 }