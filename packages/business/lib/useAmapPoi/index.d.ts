interface Props {
    state?: Record<string, any>;
    setState?: (nextState: any) => any;
    services?: {
        getAmapNearby?: any;
        searchPoiList?: any;
        getPoiDelivery?: any;
    };
}
/**
 * 获取高德地图poi，主要用于临时的poi，如创建地址时选择poi
 * @param props.setState setState可以直接使用useState，如果需要全局使用，可以替换成useStore的setState
 * @returns
 */
export default function useAmapPoi({ state, setState, services: { getAmapNearby, searchPoiList, getPoiDelivery }, }?: Props): {
    currentPoi: any;
    setPoi: ({ city, cityname, latitude, longitude, street, ...others }: Record<string, any>) => Promise<void>;
    getNearbyPois: ({ latitude, longitude, size, isAllCover, current, }?: any) => Promise<any>;
    onsearchPoiList: (params: any) => Promise<any>;
};
export {};
