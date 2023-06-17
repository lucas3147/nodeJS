import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { User } from '../models/User';

const notAuthorized = { status: 401, message: 'Não autorizado' };

passport.use(new BasicStrategy( async (email, password, done) => {
    if (email && password) {
        const user = await User.findOne({
            where: {email, password}
        });
    }

    return done(notAuthorized, false);
}));

export default passport;