/**
 * 使用这个插件后，store-next的将使用redux，同时可使用redux-dev-tool
 * 具体来说，开启这个插件的时候，所有的store操作被redux接管，并在redux数据变化后通知到store-next更新数据
 * 使用这个插件和不使用这个插件对业务端的表现完全一致，因此可以通过配置仅在开发环境使用此插件
 * @param Store
 * @returns
 */
export default function reduxPlugin<S>(Store: any): (store: any) => void;
