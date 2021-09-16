import passport from "passport";
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import config from '../config/Container'

export default class PassportAuthManger {
    public passport: any;

    constructor(){
        this.passport = passport;

        this.confJwt()
    }

    confJwt(){
        const opts = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.auth.jwtToken,
        };

        this.passport.serializeUser(function(user, done) {
            done(null, user);
        });

        this.passport.deserializeUser(function(user, done) {
            done(null, user);
        });

        this.passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            console.log('payload', jwt_payload)
            // User.findOne({id: jwt_payload.sub}, function(err, user) {
            //     if (err) {
            //         return done(err, false);
            //     }
            //     if (user) {
            //         return done(null, user);
            //     } else {
            //         return done(null, false);
            //         // or you could create a new account
            //     }
            // });
            return done(null, {id: 1, name: 'Test User'});
        }));
    }
}

export let pamInstance = new PassportAuthManger();
