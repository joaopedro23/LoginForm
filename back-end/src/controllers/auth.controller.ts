export default class AuthController {
    public post(req: any, res: any): void {
        const { password, email } = req.body;
        res.json({ message: `Received password: ${password}, email: ${email}`});
    }
}
