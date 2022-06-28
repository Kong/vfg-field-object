(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue-form-generator')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue-form-generator'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vfg-field-object"] = {}, global.vueFormGenerator));
})(this, (function (exports, VueFormGenerator) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var VueFormGenerator__default = /*#__PURE__*/_interopDefaultLegacy(VueFormGenerator);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  var script = {
    mixins: [VueFormGenerator__default["default"].abstractField],
    created: function created() {
      if (!this.value) this.value = {};
    },
    mounted: function mounted() {
      if (!this.value) return;
      var valueKeys = Object.keys(this.value);
      var keyTypes = {};

      for (var i = 0; i < valueKeys.length; i++) {
        var key = valueKeys[i];
        keyTypes[key] = _typeof(this.value[key]);
      }

      this.keyTypes = keyTypes;
    },
    data: function data() {
      return {
        attributes: this.schema ? this.schema.attributes : undefined,
        newKeyType: "string",
        newKeyName: "",
        keyTypes: {}
      };
    },
    methods: {
      removeElement: function removeElement(index) {
        var value = this.value;
        delete value[index];
        this.value = JSON.parse(JSON.stringify(value));
        var keyTypes = this.keyTypes;
        delete keyTypes[index];
        this.keyTypes = JSON.parse(JSON.stringify(keyTypes));
      },
      addKey: function addKey() {
        console.log("addKey");
        this.value[this.newKeyName] = undefined;
        this.value = _objectSpread({}, this.value);
        this.keyTypes[this.newKeyName] = this.newKeyType;
        this.keyTypes = _objectSpread({}, this.keyTypes);
        this.newKeyName = "";
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      directives: [{
        name: "attributes",
        rawName: "v-attributes",
        value: _vm.attributes,
        expression: "attributes"
      }]
    }, [_vm.schema.schema ? _c("div", [_c("vue-form-generator", {
      attrs: {
        schema: _vm.schema.schema,
        model: _vm.value,
        options: _vm.formOptions
      }
    })], 1) : _c("div", [_c("table", {
      "class": _vm.schema.fieldClasses,
      attrs: {
        id: _vm.getFieldID(_vm.schema)
      }
    }, _vm._l(_vm.value, function (item, index) {
      return _c("tr", [_c("td", [_vm._v("\n          " + _vm._s(index) + "\n        ")]), _vm._v(" "), _vm.keyTypes[index] === "string" ? _c("td", [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.value[index],
          expression: "value[index]"
        }],
        attrs: {
          type: "text"
        },
        domProps: {
          value: _vm.value[index]
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.$set(_vm.value, index, $event.target.value);
          }
        }
      })]) : _vm._e(), _vm._v(" "), _vm.keyTypes[index] === "boolean" ? _c("td", [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.value[index],
          expression: "value[index]"
        }],
        attrs: {
          type: "checkbox"
        },
        domProps: {
          checked: Array.isArray(_vm.value[index]) ? _vm._i(_vm.value[index], null) > -1 : _vm.value[index]
        },
        on: {
          change: function change($event) {
            var $$a = _vm.value[index],
                $$el = $event.target,
                $$c = $$el.checked ? true : false;

            if (Array.isArray($$a)) {
              var $$v = null,
                  $$i = _vm._i($$a, $$v);

              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.value, index, $$a.concat([$$v]));
              } else {
                $$i > -1 && _vm.$set(_vm.value, index, $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
              }
            } else {
              _vm.$set(_vm.value, index, $$c);
            }
          }
        }
      })]) : _vm._e(), _vm._v(" "), _vm.keyTypes[index] === "number" ? _c("td", [_c("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.value[index],
          expression: "value[index]"
        }],
        attrs: {
          type: "number"
        },
        domProps: {
          value: _vm.value[index]
        },
        on: {
          input: function input($event) {
            if ($event.target.composing) {
              return;
            }

            _vm.$set(_vm.value, index, $event.target.value);
          }
        }
      })]) : _vm._e(), _vm._v(" "), _c("td", [_c("input", {
        attrs: {
          type: "button",
          value: "x"
        },
        on: {
          click: function click($event) {
            return _vm.removeElement(index);
          }
        }
      })])]);
    }), 0), _vm._v(" "), _c("select", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newKeyType,
        expression: "newKeyType"
      }],
      on: {
        change: function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.newKeyType = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_c("option", {
      attrs: {
        value: "string"
      }
    }, [_vm._v("String")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "number"
      }
    }, [_vm._v("Number")]), _vm._v(" "), _c("option", {
      attrs: {
        value: "boolean"
      }
    }, [_vm._v("Boolean")])]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newKeyName,
        expression: "newKeyName"
      }],
      attrs: {
        type: "text"
      },
      domProps: {
        value: _vm.newKeyName
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.newKeyName = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("input", {
      attrs: {
        type: "button",
        value: "Add key"
      },
      on: {
        click: _vm.addKey
      }
    })])]);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  var LibraryModule = {
    FieldObject: __vue_component__,
    install: function install(Vue) {
      // Register components with vue
      Vue.component("field-object", __vue_component__);
    }
  }; // Export library

  var LibraryComponents = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': LibraryModule,
    FieldObject: __vue_component__
  });

  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(LibraryModule);
  }

  exports["default"] = LibraryComponents;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
