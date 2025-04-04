export const login = (req, res) => {
    console.log("User login Sucessfull");
    res.status(200).json({ message: "User login Sucessfull" });
  };
  
  export const signup = (req, res) => {
    console.log("User Signup Sucessfull");
    res.status(201).json({ message: "User Signup Sucessfull" });
  };