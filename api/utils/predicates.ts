
import resourcePredicate from "../utils/typeguards";

function predicate<T>(x: unknown): x is T {
    return resourcePredicate(x);
};

export default predicate;