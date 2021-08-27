declare type Status = '' | 'loading' | 'success' | 'error';
declare type OnStatusChange = (status: string) => void;
/**
 *  向页面中插入一段script
 */
export default function useScript(src: string, onStatusChange: OnStatusChange): {
    status: Status;
    whenLoaded: (cb: any) => void;
};
export {};
