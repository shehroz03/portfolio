module.exports = (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Hello from Barebones API',
        method: req.method
    });
};
