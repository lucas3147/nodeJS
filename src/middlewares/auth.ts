import { Request, Response, NextFunction } from 'express';

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let success = false;
        
        // Faz verificação de Auth

        

        if (success) {
            next();
        } else {
            res.status(403);  // Not Authorized
            res.json({error: 'Não autorizado'});
        }
    }
}