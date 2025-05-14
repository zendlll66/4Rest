exports.register = async (req, res) => {
    try {
        res.send("Register route");
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Register failed"
        })
    }
}
