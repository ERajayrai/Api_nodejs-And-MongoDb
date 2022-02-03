import Employee from '../model/user-schema.js'



export const getUsers = async (request, response) => {
    try {
        const employee = await Employee.find();
        response.json(employee);
    } catch (error) {
        response.json({ message: error.message });
    }

}
export const addUsers = async (request, response) => {
    const employee = await request.body;
    console.log("user requested...");
    console.log(employee)
    const newUser = new Employee(employee)
    try {
        const one = await newUser.save();
        response.json(one);
    } catch (error) {
        console.log(error);
    }

}
export const getUserById = async (request, response) => {
    const id = request.params.id;

    try {
        const employee = await Employee.findById(id);
        response.json(employee)
    } catch (error) {

    }
}
export const editUser = async (request, response) => {

    const employee = await request.body;
    const edit = new Employee(employee);
    console.log("connect")
    try {
        console.log("connected")
            
        await Employee.updateOne({ _id: request.params.id }, edit);
        response.json(edit);

    } catch (error) {
        response.json({ message: error.message })
        console.log(error)
    }
}
export const deleteUser = async (request, response) => {

    console.log(request.params.id)
    try {
        const userDalete=await Employee.deleteOne({ _id: request.params.id });
        response.json(userDalete);

    } catch (error) {
        response.json({ message: error.message })
        console.log(error)
    }
}