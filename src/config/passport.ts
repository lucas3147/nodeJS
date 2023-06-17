import passport from 'passport';
import dotenv from 'dotenv';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt'
import {User, UserInstance} from '../models/User';

dotenv.config();

const notAuthorizedJson = {
    status: 401,
    message: 'Não autorizado'
}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string
}

passport.use(new JWTStrategy(options, async (payload, done) => {
    
    const user = await User.findByPk(payload.id)

    if (user) {
        return done(null, user);
    } else {
        return done(notAuthorizedJson, false);
    }
}));

export default passport;