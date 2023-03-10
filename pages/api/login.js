import cookie from 'cookie';

const handler = (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            res.setHeader('Set-Cookie', cookie.serialize("token", process.env.TOKEN, {
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'strict',
                path: '/'
            }));
            res.status(200).json('Successful')
        } else {
            res.status(400).json('Wrong Information!')
        }
    }
}

export default handler;