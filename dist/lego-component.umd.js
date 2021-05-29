(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LegoComponents = {}, global.Vue, global._));
}(this, (function (exports, vue, lodashEs) { 'use strict';

  /**
   * @description 组件默认props
   */
  const commonDefaultProps = {
      // actions
      actionType: '',
      url: '',
      // size
      height: '',
      width: '318px',
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      // border type
      borderStyle: 'none',
      borderColor: '#000',
      borderWidth: '0',
      borderRadius: '0',
      // shadow and opacity
      boxShadow: '0 0 0 #000000',
      opacity: '1',
      // position and x,y
      position: 'absolute',
      left: '0',
      top: '0',
      right: '0',
  };
  const textDefaultProps = {
      // basic props - font styles
      text: '正文内容',
      fontSize: '14px',
      fontFamily: '',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '1',
      textAlign: 'left',
      color: '#000000',
      backgroundColor: '',
      ...commonDefaultProps,
  };
  const imageDefaultProps = {
      src: 'test.url',
      ...commonDefaultProps,
  };
  const transformToComponentProps = (props) => {
      return lodashEs.mapValues(props, (prop) => {
          return {
              type: prop.constructor,
              default: prop,
          };
      });
  };
  const textStylePropNames = lodashEs.without(Object.keys(textDefaultProps), 'text', 'actionType', 'url');
  const imageStylePropNames = lodashEs.without(Object.keys(imageDefaultProps), 'text', 'actionType', 'url', 'src');

  const useComponentCommon = (props, picks) => {
      const styleProps = vue.computed(() => lodashEs.pick(props, picks));
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

  const textProps = transformToComponentProps(textDefaultProps);
  var script$1 = vue.defineComponent({
      name: 'LText',
      props: {
          tag: {
              type: String,
              default: 'div',
          },
          ...textProps,
      },
      setup(props) {
          const { handleClick, styleProps } = useComponentCommon(props, textStylePropNames);
          return {
              styleProps,
              handleClick,
          };
      },
  });

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-6bf95b7a");

  const render$1 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
      style: _ctx.styleProps,
      class: "l-text-component",
      onClick: _ctx.handleClick
    }, {
      default: _withId$1(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["style", "onClick"]))
  });

  script$1.render = render$1;
  script$1.__scopeId = "data-v-6bf95b7a";
  script$1.__file = "src/components/LText/LText.vue";

  script$1.install = (app) => {
      app.component(script$1.name, script$1);
  };

  const imageProps = transformToComponentProps(imageDefaultProps);
  var script = vue.defineComponent({
      name: 'LImage',
      props: {
          ...imageProps
      },
      setup(props) {
          const { styleProps } = useComponentCommon(props, imageStylePropNames);
          return {
              styleProps,
          };
      }
  });

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-1e970aa2");

  const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
    return (vue.openBlock(), vue.createBlock("img", {
      style: _ctx.styleProps,
      src: _ctx.src,
      class: "l-image-component"
    }, null, 12 /* STYLE, PROPS */, ["src"]))
  });

  script.render = render;
  script.__scopeId = "data-v-1e970aa2";
  script.__file = "src/components/LImage/LImage.vue";

  script.install = (app) => {
      app.component(script.name, script);
  };

  const components = [
      script$1,
      script,
  ];
  var index = {
      install: (app) => {
          components.forEach(component => component.install(app));
      }
  };

  exports.LImage = script;
  exports.LText = script$1;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
