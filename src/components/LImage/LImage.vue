<template>
    <img :style='styleProps' :src='src' class="l-image-component">
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { transformToComponentProps, imageDefaultProps, imageStylePropNames } from '../../defaultProps';
import useComponentCommon from '../../hooks/useComponentCommon';
const imageProps = transformToComponentProps(imageDefaultProps);
export default defineComponent({
    name: 'LImage',
    props: {
        ...imageProps
    },
    setup(props) {
        const { styleProps } = useComponentCommon(props, imageStylePropNames);
        return {
            styleProps,
        }
    }
})
</script>
<style scoped>
  .l-image-component {
    box-sizing: border-box;
    white-space: pre-wrap;
    position: relative !important;
  }
</style>