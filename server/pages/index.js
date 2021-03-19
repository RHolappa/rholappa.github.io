exports.ids = [2];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./info.md": [
		27,
		3
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 26;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=8caa4c4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<div style=\"margin: 0px auto; width: 59.5rem; max-width: 100%; box-sizing: border-box; padding: 0px 20px;\">","</div>",_vm._l((_vm.guides),function(guide,index){return _vm._ssrNode("<article class=\"post\">","</article>",[_vm._ssrNode("<div class=\"post-aside\">","</div>",[_vm._ssrNode("<small>"+_vm._ssrEscape(_vm._s(guide.attributes.date))+"</small> "),_vm._ssrNode("<h3 class=\"post-title\">","</h3>",[_c('nuxt-link',{staticStyle:{"box-shadow":"none"},attrs:{"to":guide.attributes.link}},[_vm._v(_vm._s(guide.attributes.title))])],1),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(guide.attributes.description))+"</p>")],2),_vm._ssrNode(" <div class=\"products\">"+(_vm._ssrList((guide.attributes.products),function(product,index){return ("<article><img"+(_vm._ssrAttr("src",product.image))+(_vm._ssrAttr("alt",product.name))+"> <button"+(_vm._ssrAttr("data-item-id",product.sku))+(_vm._ssrAttr("data-item-name",product.name))+(_vm._ssrAttr("data-item-price",product.price))+(_vm._ssrAttr("data-item-image",product.image))+(_vm._ssrAttr("data-item-url","https://snipcart-nuxt-pwa.netlify.com/"))+" class=\"buy-button snipcart-add-item\">"+_vm._ssrEscape("\n              "+_vm._s(("$" + (product.price)))+"\n            ")+"</button> <p class=\"product-name\">"+_vm._ssrEscape(_vm._s(product.name))+"</p></article>")}))+"</div>")],2)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=8caa4c4e&

// CONCATENATED MODULE: ./contents/guides/guides.js
/* harmony default export */ var guides = (['info']);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {},

  async asyncData({
    route
  }) {
    const promises = guides.map(guide => __webpack_require__(26)(`./${guide}.md`));
    return {
      guides: await Promise.all(promises)
    };
  },

  head() {
    return {
      title: "Portfolio"
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d7ae7470"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map