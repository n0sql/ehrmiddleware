function resourcePredicate(x: unknown)  {
    if (x instanceof Error) {
        return false
    };
    if (typeof x !== "object" || x === null) return false;
    if (typeof x === "object" && 'results' in x) {
        return true; 
    };
    if (typeof x === "object" && 'uuid' in x) {
        return true;
    };
    if (typeof x === "object" && Object.keys(x).length > 0) {
        return true;
    };
    return false;
};

export default resourcePredicate;