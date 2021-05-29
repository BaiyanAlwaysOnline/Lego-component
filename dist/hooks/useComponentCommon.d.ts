import { ComponentType } from '../defaultProps';
declare const useComponentCommon: (props: Readonly<Partial<ComponentType>>, picks: string[]) => {
    styleProps: import("vue").ComputedRef<Partial<Readonly<Partial<import("../defaultProps").TextComponentProps>>> | Partial<Readonly<Partial<import("../defaultProps").ImageComponentProps>>>>;
    handleClick: () => void;
};
export default useComponentCommon;
