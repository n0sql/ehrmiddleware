import { Request, Response } from 'express';
import sessionManager from '../Controllers/session/session';

async function _genericRestMethod<T>(req: Request, res: Response){
    const resource = await sessionManager.runRequest<T>(req);
    if (resource instanceof Error) {
        return res.status(400).send(resource.message);
    }
    return res.status(200).send(resource);
};


export default _genericRestMethod;