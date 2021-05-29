import { pick } from 'lodash-es';
import { computed } from 'vue';
import { ComponentType } from '../defaultProps';

const useComponentCommon = (props: Readonly<Partial<ComponentType>>, picks: string[]) => {
  const styleProps = computed(() => pick(props, picks));
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url;
    }
  };

  return {
    styleProps,
    handleClick,
  };
};

export default useComponentCommon;
