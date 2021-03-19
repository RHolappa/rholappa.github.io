exports.ids = [1];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/guides/_slug.vue?vue&type=template&id=6dfc9ac7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"single-post",staticStyle:{"margin":"0px auto","width":"59.5rem","max-width":"100%","box-sizing":"border-box","padding":"0px 20px"}},[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.attributes.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.attributes.date))+"</p> <span class=\"markdown\">"+(_vm._s(_vm.html))+"</span> <div class=\"products\">"+(_vm._ssrList((_vm.attributes.products),function(product,index){return ("<article><img"+(_vm._ssrAttr("src",("../" + (product.image))))+(_vm._ssrAttr("alt",product.name))+"> <button"+(_vm._ssrAttr("data-item-id",product.sku))+(_vm._ssrAttr("data-item-name",product.name))+(_vm._ssrAttr("data-item-price",product.price))+(_vm._ssrAttr("data-item-image",product.image))+(_vm._ssrAttr("data-item-url",("https://snipcart-nuxt-pwa.netlify.com" + _vm.currentUrl)))+" class=\"buy-button snipcart-add-item\">"+_vm._ssrEscape(_vm._s(("$" + (product.price))))+"</button> <p class=\"product-name\">"+_vm._ssrEscape(_vm._s(product.name))+"</p></article>")}))+"</div> "),_c('Bio')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/guides/_slug.vue?vue&type=template&id=6dfc9ac7&

// EXTERNAL MODULE: ./components/Bio.vue + 2 modules
var Bio = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/guides/_slug.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  components: {
    Bio: Bio["a" /* default */]
  },

  async asyncData({
    params,
    route
  }) {
    const guideName = params.slug;
    const markdownContent = await __webpack_require__(26)(`./${guideName}.md`);
    return {
      attributes: markdownContent.attributes,
      html: markdownContent.html,
      currentUrl: route.path
    };
  },

  head() {
    return {
      title: `${this.attributes.title} | Portfolio`
    };
  }

});
// CONCATENATED MODULE: ./pages/guides/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var guides_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/guides/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  guides_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59f13b5f"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map