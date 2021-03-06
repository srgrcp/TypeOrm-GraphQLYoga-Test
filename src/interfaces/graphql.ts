export interface Context {
    url: string;
    req: Express.Request;
}

export type Resolver = (
    parent: any,
    args: any,
    context: Context,
    info: any
) => any

export interface ResolverMap {
    [key: string]: {
        [key: string]: Resolver;
    };
}