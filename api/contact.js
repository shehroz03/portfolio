export default function handler(req, res) {
    res.status(200).json({
        status: 'ok',
        message: 'Hello from ES Module API',
        method: req.method
    });
}
