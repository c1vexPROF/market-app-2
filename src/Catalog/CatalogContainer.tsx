import Catalog from "./Catalog";

type OneOfObject<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

  interface Props {
    empty:any;
    totalCostInHeaderByCatalog:any;
  }

function CatalogContainer(props: OneOfObject<Props>) {
    return <Catalog totalCostInHeaderByCatalog={undefined}  />
}
export default CatalogContainer;
