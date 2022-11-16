export default function useLoading(): IUseLoading;
/** Specifies the props relating to the load conditions, such as skipping the delay. */
export interface ILoad {
    skipDelay?: boolean;
}
export interface IUseLoading {
    loading: boolean;
    load: (props?: ILoad | undefined) => void;
    unload: () => void;
}
