declare type Status = '' | 'loading' | 'success' | 'error';
/**
 *  向页面中插入一段script
*/
export default function useScript(src: string): Status;
export {};
