declare global{
    namespace Express{
        interface Request{
            users: object;
            user: {id: string};
        }
    }
}


export default global