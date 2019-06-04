(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Announcement.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Announcement.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      expiring: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("".concat("http://localhost:8000/api", "/trainer/expiring")).then(function (res) {
      _this.expiring = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Avatar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var random_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! random-color */ "./node_modules/random-color/index.js");
/* harmony import */ var random_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(random_color__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    first: {
      type: String,
      "default": ""
    },
    last: {
      type: String,
      "default": ""
    },
    supersize: {
      type: Boolean,
      "default": false
    },
    size: {
      type: [Number, String],
      "default": 34
    }
  },
  computed: {
    initials: function initials() {
      return "".concat(this.first[0]).concat(this.last[0]).toUpperCase();
    },
    backgroundColor: function backgroundColor() {
      var color = random_color__WEBPACK_IMPORTED_MODULE_0___default()();
      return color.rgbString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Block.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Block.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  computed: {
    icon: function icon() {
      return {
        url: "/images/".concat(this.block.type.name, ".svg"),
        alt: this.block.type.name
      };
    }
  },
  props: {
    block: Object,
    name: String,
    params: Object
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlockHeader.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onDelete: function onDelete() {
      var _this = this;

      this.$http["delete"]("".concat("http://localhost:8000/api").concat(this.deleteBlock.url)).then(function (res) {
        _this.$store.dispatch("add", {
          type: "success",
          message: res.data.message,
          show: true
        });

        _this.$router.push(_this.deleteBlock.redirect);
      })["catch"](function (err) {
        _this.$store.dispatch("add", {
          type: "error",
          message: err,
          show: true
        });
      });
    }
  },
  props: {
    heading: String,
    subheading: String,
    type: String,
    action: Object,
    deleteBlock: Object
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isTrainer"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construction.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construction.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContextMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isOpen: false
    };
  },
  watch: {
    isOpen: function isOpen(_isOpen) {
      if (_isOpen) {
        document.addEventListener("click", this.closeIfClickedOutside);
      }
    }
  },
  methods: {
    closeIfClickedOutside: function closeIfClickedOutside(event) {
      if (!event.target.closest(".context")) {
        this.isOpen = false;
        document.removeEventListener("click", this.closeIfClickedOutside);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isVisible: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.isVisible = false;
      this.$emit("accept-delete-modal");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoalCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    icon: String,
    count: {
      type: [String, Number]
    },
    text: String,
    loading: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ "./resources/js/components/Avatar.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    avatar: _Avatar__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showLogin: false,
      showDrawer: false,
      showMenu: false,
      fixed: false
    };
  },
  methods: {
    login: function login() {
      this.showLogin = !this.showLogin;
    },
    openDrawer: function openDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    openMenu: function openMenu() {
      this.showMenu = !this.showMenu;
    },
    successfulLogin: function successfulLogin() {
      this.showLogin = !this.showLogin;
      this.$router.push("/u/overview");
    },
    logout: function logout() {
      var _this = this;

      this.$store.dispatch("logout").then(function () {
        _this.$router.push("/");

        _this.openDrawer();
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["authorized", "isAdmin", "isTrainer", "user", "role"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Instagram.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Instagram.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    translucent: {
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isAdmin: this.$store.getters.isAdmin,
      isTrainer: this.$store.getters.isTrainer
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NotFound.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SideNavigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SideNavigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Snackbar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubNavigation.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubNavigation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isActive: false
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  },
  computed: {
    href: function href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    }
  },
  props: {
    name: {
      required: true
    },
    selected: {
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function selectTab(selectedTab) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.href == selectedTab.href;
      });
    }
  },
  props: {
    icon: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/js/utils.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      hover: false
    };
  },
  methods: {
    onClick: function onClick() {
      if (this.type !== "rest") {
        this.$router.push(this.linkparams);
      }
    }
  },
  computed: {
    backgroundImage: function backgroundImage() {
      return "url(/images/".concat(this.type, "-card.jpg)");
    },
    gradient: function gradient() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["gradients"][this.type];
    },
    icon: function icon() {
      return {
        url: "/images/".concat(this.type, ".svg"),
        alt: this.type
      };
    }
  },
  props: {
    linkparams: Object,
    name: String,
    id: {
      type: [String, Number]
    },
    type: String,
    date: String,
    subtext: {
      type: String,
      "default": ""
    },
    shadow: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showPopover: false
    };
  },
  props: {
    workout: Object,
    userId: Number,
    blockId: Number
  },
  methods: {
    togglePopover: function togglePopover() {
      this.showPopover = !this.showPopover;
    },
    closePopover: function closePopover() {
      this.showPopover = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      types: [],
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: "",
        start_date: "",
        type_id: 1
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("".concat("http://localhost:8000/api", "/trainer/types")).then(function (res) {
      _this.types = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      var userId = this.$route.params.id;
      this.form.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(userId, "/blocks")).then(function (res) {
        _this2.$store.dispatch("add", {
          type: "success",
          message: "Added block",
          show: true
        });

        _this2.$emit("create-block-success");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: [],
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        category_id: 1,
        name: ""
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("".concat("http://localhost:8000/api", "/trainer/categories")).then(function (res) {
      _this.loading = false;
      _this.categories = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.form.post("".concat("http://localhost:8000/api", "/trainer/exercises")).then(function (res) {
        console.log(res);

        _this2.$store.dispatch("add", {
          type: "success",
          message: "Added exercise successfully.",
          show: true
        });

        _this2.$emit("create-exercise-success");

        _this2.$emit("close-exercise-create");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      exercises: [],
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        exercise_id: [],
        num_sets: "",
        notes: ""
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("".concat("http://localhost:8000/api", "/trainer/exercises")).then(function (res) {
      _this.loading = false;
      _this.exercises = res.data;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id,
          workout_id = _this$$route$params.workout_id;
      this.form.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets")).then(function (res) {
        _this2.$store.dispatch("add", {
          type: "success",
          message: "Added exercise",
          show: true
        });

        _this2.$emit("create-set-success");

        _this2.$emit("close-set-create");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.form.post("".concat("http://localhost:8000/api", "/trainer/users")).then(function (res) {
        _this.$store.dispatch("add", {
          type: "success",
          message: "Added user successfully.",
          show: true
        });

        _this.$emit("create-user-success");

        _this.$emit("close-user-create");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: "",
        date: ""
      })
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id;
      this.form.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts")).then(function (res) {
        _this.$store.dispatch("add", {
          type: "success",
          message: "Added workout",
          show: true
        });

        _this.$emit("create-workout-success");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      date: "",
      loading: false
    };
  },
  props: {
    show: Boolean
  },
  methods: {
    closeWindow: function closeWindow() {
      this.$emit("cancel-workout-duplicate");
    },
    createWorkout: function createWorkout(e) {
      var _this = this;

      this.loading = true;
      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          workout_id = _this$$route$params.workout_id;
      this.$http.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/workouts/").concat(workout_id), {
        date: this.date
      }).then(function (res) {
        _this.date = "";
        _this.loading = false;

        _this.$store.dispatch("add", {
          type: "success",
          message: "Added workout successfully.",
          show: true
        });

        _this.$emit("duplicate-workout-success");

        _this.$emit("cancel-workout-duplicate");
      })["catch"](function (err) {
        _this.$store.dispatch("add", {
          type: "error",
          message: err.message,
          show: true
        });

        _this.$emit("duplicate-workout-error", err);

        _this.$emit("cancel-workout-duplicate");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      exercises: [],
      exercise: [],
      sets: "",
      notes: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    var _this$$route$params = this.$route.params,
        user_id = _this$$route$params.user_id,
        block_id = _this$$route$params.block_id,
        workout_id = _this$$route$params.workout_id,
        set_id = _this$$route$params.set_id;
    this.$http.all([this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets/").concat(set_id)), this.$http.get("".concat("http://localhost:8000/api", "/trainer/exercises"))]).then(this.$http.spread(function (set, exercises) {
      _this.exercises = exercises.data;
      set.data.set.exercises.forEach(function (exercise) {
        _this.exercise.push(exercise.id);
      });
      _this.sets = set.data.set.set.num_sets;
      _this.notes = set.data.set.set.notes;
    }))["catch"](function (err) {
      console.log(err);
    });
  },
  props: {
    show: Boolean,
    editData: Object
  },
  methods: {
    closeWindow: function closeWindow() {
      this.$router.go(-1);
    },
    createExercise: function createExercise(e) {
      var _this2 = this;

      e.preventDefault();
      this.loading = true;
      var user = JSON.parse(localStorage.getItem("user"));
      var _this$$route$params2 = this.$route.params,
          user_id = _this$$route$params2.user_id,
          block_id = _this$$route$params2.block_id,
          workout_id = _this$$route$params2.workout_id,
          set_id = _this$$route$params2.set_id;
      this.$http.put("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets/").concat(set_id), {
        num_sets: this.sets,
        notes: this.notes,
        exercise_id: this.exercise
      }).then(function (res) {
        _this2.$router.go(-1);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      var username = this.username;
      var password = this.password;
      this.$store.dispatch("login", {
        username: username,
        password: password
      }).then(function () {
        _this.$store.dispatch("add", {
          type: "success",
          message: "Logged in successfully.",
          show: true
        });

        _this.$router.push("/");

        _this.$emit("logged-in");
      })["catch"](function (err) {
        _this.$store.dispatch("add", {
          type: "error",
          message: err.message,
          show: true
        });
      });
    }
  },
  props: {
    isToggled: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      checkedCategories: [],
      showFilterMenu: false
    };
  },
  methods: {
    toggleFilterMenu: function toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    getCategoryIcon: function getCategoryIcon(exercise) {
      if (exercise.category_id === 1) {
        return "/images/weight-lifting-icon.svg";
      } else if (exercise.category_id === 2) {
        return "/images/circuit-icon.svg";
      } else if (exercise.category_id === 3) {
        return "/images/cardio-icon.svg";
      }
    },
    getNumExercises: function getNumExercises(id) {
      var exerc = this.exercises.filter(function (exercise) {
        return exercise.category_id === id;
      });
      return exerc.length;
    }
  },
  computed: {
    filteredExercises: function filteredExercises() {
      var _this = this;

      if (this.checkedCategories.length) {
        return this.exercises.filter(function (exercise) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.checkedCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var category = _step.value;

              if (exercise.category_id === category) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return false;
        });
      } else {
        return this.exercises;
      }
    }
  },
  props: {
    exercises: Array,
    heading: String,
    categories: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/UserList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Avatar */ "./resources/js/components/Avatar.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    avatar: _Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      showFilterMenu: false,
      activity: [],
      query: ""
    };
  },
  methods: {
    toggleFilterMenu: function toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    getNumUsers: function getNumUsers(id) {
      var users = this.users.filter(function (user) {
        return user.is_active === id;
      });
      return users.length;
    }
  },
  computed: {
    filteredUsers: function filteredUsers() {
      var _this = this;

      if (this.activity.length) {
        return this.searchResults.filter(function (user) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _this.activity[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var status = _step.value;

              if (user.is_active === parseInt(status)) {
                return true;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return false;
        });
      } else {
        return this.searchResults;
      }
    },
    searchResults: function searchResults() {
      var _this2 = this;

      return this.users.filter(function (user) {
        var name = "".concat(user.first_name, " ").concat(user.last_name);
        return name.toLowerCase().includes(_this2.query.toLowerCase());
      });
    },
    showLastWeek: function showLastWeek() {
      return !!this.expiring.length;
    }
  },
  props: {
    users: Array,
    expiring: Array,
    heading: String,
    show: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["authorized", "isAdmin", "isTrainer"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      var username = this.username;
      var password = this.password;
      this.$store.dispatch("login", {
        username: username,
        password: password
      }).then(function () {
        return _this.$router.push("/u/overview");
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      workouts: [],
      showCreateWorkoutform: false,
      showPopover: false,
      loading: true
    };
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id;
      this.toggleModal();
      this.loading = true;
      this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id)).then(function (res) {
        _this.workouts = res.data.workouts;
        _this.loading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleModal: function toggleModal() {
      this.showCreateWorkoutform = !this.showCreateWorkoutform;
    },
    getDay: function getDay(date) {
      var d = new Date(date);
      return d.getDay();
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var _this$$route$params2 = this.$route.params,
        user_id = _this$$route$params2.user_id,
        block_id = _this$$route$params2.block_id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id)).then(function (res) {
      _this2.block = res.data.block;
      _this2.type = res.data.type;
      _this2.workouts = res.data.workouts.sort(function (a, b) {
        return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
      });
      _this2.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: {
    userId: function userId() {
      return parseInt(this.$route.params.user_id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      workout: {},
      start_date: "",
      name: "",
      showModal: false,
      loading: true
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id;
      this.$http.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/duplicate/").concat(block_id), {
        start_date: this.start_date,
        name: this.name
      }).then(function (res) {
        _this.start_date = "";
        _this.name = "";

        _this.$store.dispatch("add", {
          type: "success",
          message: "Duplicated block.",
          show: true
        });

        _this.$router.push({
          name: "user",
          params: {
            id: user_id
          }
        });
      })["catch"](function (err) {
        _this.$store.dispatch("add", {
          type: "error",
          message: err.message,
          show: true
        });
      });
    },
    closeWindow: function closeWindow() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var _this$$route$params2 = this.$route.params,
        user_id = _this$$route$params2.user_id,
        block_id = _this$$route$params2.block_id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id)).then(function (res) {
      _this2.workout = res.data.workout;
      _this2.block = res.data.block;
      _this2.type = res.data.type;
      _this2.start_date = res.data.block.start_date;
      _this2.name = res.data.block.name;
      _this2.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      workout: {},
      date: "",
      name: "",
      showModal: false,
      loading: true
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id,
          workout_id = _this$$route$params.workout_id;
      this.$http.post("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/workouts/duplicate/").concat(workout_id), {
        date: this.date,
        name: this.name
      }).then(function (res) {
        _this.date = "";
        _this.name = "";

        _this.$store.dispatch("add", {
          type: "success",
          message: "Duplicated workout.",
          show: true
        });

        _this.$router.push({
          name: "block",
          params: {
            user_id: user_id,
            block_id: block_id
          }
        });
      })["catch"](function (err) {
        _this.$store.dispatch("add", {
          type: "error",
          message: err.message,
          show: true
        });
      });
    },
    closeWindow: function closeWindow() {
      this.$router.go(-1);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var _this$$route$params2 = this.$route.params,
        user_id = _this$$route$params2.user_id,
        block_id = _this$$route$params2.block_id,
        workout_id = _this$$route$params2.workout_id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id)).then(function (res) {
      _this2.workout = res.data.workout;
      _this2.block = res.data.block;
      _this2.type = res.data.type;
      _this2.date = res.data.workout.date;
      _this2.name = res.data.workout.name;
      _this2.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      loading: true
    };
  },
  methods: {
    getDay: function getDay(date) {
      var d = new Date(date);
      return d.getDay();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var _this$$route$params = this.$route.params,
        user_id = _this$$route$params.user_id,
        block_id = _this$$route$params.block_id,
        workout_id = _this$$route$params.workout_id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets")).then(function (res) {
      _this.block = res.data.block;
      _this.type = res.data.type;
      _this.workout = res.data.workout;
      _this.sets = res.data.sets;
      _this.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      exercises: [],
      categories: [],
      showModal: false,
      loading: true
    };
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;

      this.loading = true;
      this.$http.get("".concat("http://localhost:8000/api", "/trainer/exercises")).then(function (res) {
        _this.exercises = res.data;
        _this.loading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.loading = true;
    this.$http.all([this.$http.get("".concat("http://localhost:8000/api", "/trainer/exercises")), this.$http.get("".concat("http://localhost:8000/api", "/trainer/categories"))]).then(this.$http.spread(function (exercises, categories) {
      _this2.exercises = exercises.data;
      _this2.categories = categories.data;
      _this2.loading = false;
    }))["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {},
      blocks: [],
      isActive: false,
      loading: true,
      showAddBlockForm: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.all([this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(this.$route.params.id)), this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(this.$route.params.id, "/blocks"))]).then(this.$http.spread(function (user, blocks) {
      _this.user = user.data;
      _this.isActive = user.data.is_active === 1 ? true : false;
      _this.blocks = blocks.data.sort(function (a, b) {
        return a.start_date < b.start_date ? 1 : b.start_date < a.start_date ? -1 : 0;
      });
      _this.loading = false;
    }))["catch"](function (err) {
      console.log(err);
    });
  },
  methods: {
    refreshData: function refreshData() {
      var _this2 = this;

      this.loading = true;
      this.toggleAddBlockForm();
      this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(this.$route.params.id, "/blocks")).then(function (res) {
        _this2.blocks = res.data.sort(function (a, b) {
          return a.start_date < b.start_date ? 1 : b.start_date < a.start_date ? -1 : 0;
        });
        _this2.loading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleAddBlockForm: function toggleAddBlockForm() {
      this.showAddBlockForm = !this.showAddBlockForm;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: {},
      expiring: {},
      showModal: false,
      loading: true
    };
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;

      this.loading = true;
      this.$http.get("".concat("http://localhost:8000/api", "/trainer/users")).then(function (res) {
        _this.users = res.data;
        _this.loading = false;
      })["catch"](function (err) {});
    },
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$http.all([this.$http.get("".concat("http://localhost:8000/api", "/trainer/expiring")), this.$http.get("".concat("http://localhost:8000/api", "/trainer/users"))]).then(this.$http.spread(function (expiring, all) {
      _this2.users = all.data;
      _this2.expiring = expiring.data;
      _this2.loading = false;
    }))["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      workout: {},
      sets: [],
      set_id: 0,
      showModal: false,
      loading: true
    };
  },
  methods: {
    refreshData: function refreshData() {
      var _this = this;

      var _this$$route$params = this.$route.params,
          user_id = _this$$route$params.user_id,
          block_id = _this$$route$params.block_id,
          workout_id = _this$$route$params.workout_id;
      this.loading = true;
      this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets")).then(function (res) {
        _this.sets = res.data.sets;
        _this.loading = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
    },
    getDay: function getDay(date) {
      var d = new Date(date);
      return d.getDay();
    },
    togglePopover: function togglePopover(ref) {
      if (this.$refs[ref][0].classList.contains("flex")) {
        this.$refs[ref][0].classList.add("hidden");
        this.$refs[ref][0].classList.remove("flex");
      } else {
        this.$refs[ref][0].classList.add("flex");
        this.$refs[ref][0].classList.remove("hidden");
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var _this$$route$params2 = this.$route.params,
        user_id = _this$$route$params2.user_id,
        block_id = _this$$route$params2.block_id,
        workout_id = _this$$route$params2.workout_id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/trainer/users/").concat(user_id, "/blocks/").concat(block_id, "/workouts/").concat(workout_id, "/sets")).then(function (res) {
      _this2.block = res.data.block;
      _this2.type = res.data.type;
      _this2.workout = res.data.workout;
      _this2.sets = res.data.sets;
      _this2.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Goals.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Goals.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Overview.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Avatar */ "./resources/js/components/Avatar.vue");
/* harmony import */ var _components_GoalCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/GoalCard */ "./resources/js/components/GoalCard.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    avatar: _components_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"],
    "goal-card": _components_GoalCard__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      todaysWorkout: {},
      weeksWorkouts: [],
      allWorkouts: [],
      sets: [],
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    var todaysDate = this.$moment().format("YYYY-MM-DD");
    var startDate = this.$moment().add(1, "d").format("YYYY-MM-DD");
    var endDate = this.$moment().add(3, "d").format("YYYY-MM-DD");
    this.loading = true;
    this.$http.all([this.$http.get("".concat("http://localhost:8000/api", "/workouts/date/").concat(todaysDate)), this.$http.get("".concat("http://localhost:8000/api", "/workouts/date/").concat(startDate, "/").concat(endDate)), this.$http.get("".concat("http://localhost:8000/api", "/workouts"))]).then(this.$http.spread(function (today, week, all) {
      _this.todaysWorkout = today.data.workout;
      _this.sets = today.data.sets;
      _this.weeksWorkouts = week.data;
      _this.allWorkouts = all.data;
      _this.loading = false;
    }))["catch"](function (err) {
      console.log(err);
    });
  },
  computed: _objectSpread({
    numWorkouts: function numWorkouts() {
      return this.allWorkouts.length;
    },
    weekAhead: function weekAhead() {
      var first = this.$moment().add(1, "d").format("YYYY-MM-DD");
      var second = this.$moment().add(2, "d").format("YYYY-MM-DD");
      var third = this.$moment().add(3, "d").format("YYYY-MM-DD");
      var days = [first, second, third];
      var nextWorkouts = [];
      this.weeksWorkouts.forEach(function (workout) {
        days.splice(days.indexOf(workout.date), 1);
        nextWorkouts.push(workout);
      });
      days.forEach(function (day) {
        nextWorkouts.push({
          name: "No Workout",
          block: {
            type: {
              name: "rest"
            }
          },
          date: day
        });
      });
      return nextWorkouts.sort(function (a, b) {
        return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isActive", "user", "isTrainer"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      form: new _classes_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  mounted: function mounted() {
    this.setUserInformation();
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.loading = true;
      this.form.post("".concat("http://localhost:8000/api", "/user/update")).then(function (res) {
        _this.$store.dispatch("updateUser").then(function (res) {
          _this.setUserInformation();

          _this.$store.dispatch("add", {
            type: "success",
            message: "Updated profile",
            show: true
          });

          _this.loading = false;
        })["catch"](function (err) {
          _this.loading = false;
          console.log(err);
        });
      })["catch"](function (err) {
        _this.loading = false;
        console.log(err);
      });
    },
    setUserInformation: function setUserInformation() {
      var _this$user = this.user,
          email = _this$user.email,
          first_name = _this$user.first_name,
          last_name = _this$user.last_name;
      this.form.email = email;
      this.form.first_name = first_name;
      this.form.last_name = last_name;
    }
  },
  computed: _objectSpread({
    fullName: function fullName() {
      return "".concat(this.user.first_name, " ").concat(this.user.last_name);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isActive", "user"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      block: {},
      type: {},
      workouts: [],
      loading: true
    };
  },
  methods: {
    getDay: function getDay(date) {
      var d = new Date(date);
      return d.getDay();
    },
    isPastDate: function isPastDate(date) {
      var today = this.$moment();
      var workoutDate = this.$moment(date);
      return today.isAfter(workoutDate);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var id = this.$route.params.id;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/blocks/").concat(id)).then(function (res) {
      _this.block = res.data;
      _this.type = res.data.type;
      _this.workouts = res.data.workouts.sort(function (a, b) {
        return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
      });
      _this.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: {
    userId: function userId() {
      return this.$route.params.user_id;
    },
    weeks: function weeks() {
      return [this.firstWeek, this.secondWeek, this.thirdWeek, this.fourthWeek];
    },
    firstWeek: function firstWeek() {
      var _this2 = this;

      var startDate = this.$moment(this.block.start_date).startOf("week");
      var endDate = this.$moment(this.block.start_date).endOf("week");
      return this.workouts.filter(function (workout) {
        var workoutDate = _this2.$moment(workout.date);

        return workoutDate.isBetween(startDate, endDate);
      });
    },
    secondWeek: function secondWeek() {
      var _this3 = this;

      var startDate = this.$moment(this.block.start_date).add(1, "w").startOf("week");
      var endDate = this.$moment(this.block.start_date).add(1, "w").endOf("week");
      return this.workouts.filter(function (workout) {
        var workoutDate = _this3.$moment(workout.date);

        return workoutDate.isBetween(startDate, endDate);
      });
    },
    thirdWeek: function thirdWeek() {
      var _this4 = this;

      var startDate = this.$moment(this.block.start_date).add(2, "w").startOf("week");
      var endDate = this.$moment(this.block.start_date).add(2, "w").endOf("week");
      return this.workouts.filter(function (workout) {
        var workoutDate = _this4.$moment(workout.date);

        return workoutDate.isBetween(startDate, endDate);
      });
    },
    fourthWeek: function fourthWeek() {
      var _this5 = this;

      var startDate = this.$moment(this.block.start_date).add(3, "w").startOf("week");
      var endDate = this.$moment(this.block.start_date).add(3, "w").endOf("week");
      return this.workouts.filter(function (workout) {
        var workoutDate = _this5.$moment(workout.date);

        return workoutDate.isBetween(startDate, endDate);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      blocks: [],
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/blocks")).then(function (res) {
      _this.blocks = res.data.sort(function (a, b) {
        return a.start_date < b.start_date ? 1 : b.start_date < a.start_date ? -1 : 0;
      });
      _this.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isActive", "user"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      weekStart: "",
      workouts: [],
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    var today = this.$moment();
    var weekStart = this.$moment(today).startOf("week").add(1, "days");
    var weekEnd = this.$moment(today).endOf("week").add(1, "days");
    this.weekStart = weekStart;
    this.loading = true;
    this.$http.get("".concat("http://localhost:8000/api", "/workouts/date/").concat(weekStart.format("YYYY-MM-DD"), "/").concat(weekEnd.format("YYYY-MM-DD"))).then(function (res) {
      _this.workouts = res.data.sort(function (a, b) {
        return a.date > b.date ? 1 : b.date > a.date ? -1 : 0;
      });
      _this.loading = false;
    });
  },
  computed: _objectSpread({
    typeName: function typeName() {
      if (this.workouts.length) {
        return this.workouts[0].block.type.name;
      } else {
        return "";
      }
    },
    firstBlock: function firstBlock() {
      if (this.workouts.length) {
        return this.workouts[0].block;
      } else {
        return {
          name: "",
          start_date: ""
        };
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isActive", "user"])),
  methods: {
    isPastDate: function isPastDate(date) {
      var today = this.$moment();
      var workoutDate = this.$moment(date);
      return today.isAfter(workoutDate);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      workout: {},
      sets: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("".concat("http://localhost:8000/api", "/workouts/").concat(this.$route.params.id)).then(function (res) {
      _this.workout = res.data.workout;
      _this.sets = res.data.sets;
      _this.loading = false;
    })["catch"](function (err) {
      console.log(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar[data-v-62781b04] {\n  width: 34px;\n  height: 34px;\n  border-radius: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n}\n.supersize[data-v-62781b04] {\n  font-size: 5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".goal-card:first-child {\n  margin-left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card[data-v-737627b2] {\n  background-position: center;\n  background-size: cover;\n}\n.card-content[data-v-737627b2] {\n  height: 100%;\n  -webkit-transition: all .25s;\n  -o-transition: all .25s;\n  transition: all .25s;\n}\n.card-slug[data-v-737627b2] {\n  -webkit-transition: margin .25s;\n  -o-transition: margin .25s;\n  transition: margin .25s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar[data-v-0d864e44] {\n  width: 150px;\n  height: 150px;\n  border-radius: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-icon[data-v-aa78eaa4] {\n  height: 150px;\n  width: 150px;\n}\n.opacity-10[data-v-aa78eaa4] {\n  opacity: .1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".workout-item[data-v-2f15f4c7] {\n  width: 100%;\n}\n@media (min-width: 768px) {\n.workout-item[data-v-2f15f4c7] {\n    width: 50%;\n}\n}\n@media (min-width: 1024px) {\n.workout-item[data-v-2f15f4c7] {\n    width: 33%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".strength {\n  background-image: -webkit-gradient(linear, left top, right bottom, from(rgba(229, 45, 39, 1)), to(rgba(179, 18, 23, .5))), url(\"/images/strength.jpg\");\n  background-image: -webkit-linear-gradient(top left, rgba(229, 45, 39, 1), rgba(179, 18, 23, .5)), url(\"/images/strength.jpg\");\n  background-image: -o-linear-gradient(top left, rgba(229, 45, 39, 1), rgba(179, 18, 23, .5)), url(\"/images/strength.jpg\");\n  background-image: linear-gradient(to bottom right, rgba(229, 45, 39, 1), rgba(179, 18, 23, .5)), url(\"/images/strength.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.hypertrophy {\n  background-image: -webkit-gradient(linear, left top, right bottom, from(rgba(68, 129, 235, 1)), to(rgba(4, 190, 254, .5))), url(\"/images/hypertrophy.jpg\");\n  background-image: -webkit-linear-gradient(top left, rgba(68, 129, 235, 1), rgba(4, 190, 254, .5)), url(\"/images/hypertrophy.jpg\");\n  background-image: -o-linear-gradient(top left, rgba(68, 129, 235, 1), rgba(4, 190, 254, .5)), url(\"/images/hypertrophy.jpg\");\n  background-image: linear-gradient(to bottom right, rgba(68, 129, 235, 1), rgba(4, 190, 254, .5)), url(\"/images/hypertrophy.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.fitness {\n  background-image: -webkit-gradient(linear, left top, right bottom, color-stop(2.3%, rgba(43, 170, 96, 1)), color-stop(98.3%, rgba(129, 204, 104, .5))), url(\"/images/fitness.jpg\");\n  background-image: -webkit-linear-gradient(top left, rgba(43, 170, 96, 1) 2.3%, rgba(129, 204, 104, .5) 98.3%), url(\"/images/fitness.jpg\");\n  background-image: -o-linear-gradient(top left, rgba(43, 170, 96, 1) 2.3%, rgba(129, 204, 104, .5) 98.3%), url(\"/images/fitness.jpg\");\n  background-image: linear-gradient(to bottom right, rgba(43, 170, 96, 1) 2.3%, rgba(129, 204, 104, .5) 98.3%), url(\"/images/fitness.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pop-out-quick-enter-active,\n.pop-out-quick-leave-active {\n  -webkit-transition: all .4s;\n  -o-transition: all .4s;\n  transition: all .4s;\n}\n.pop-out-quick-enter,\n.pop-out-quick-leave-active {\n  opacity: 0;\n  -webkit-transform: translateY(-7px);\n      -ms-transform: translateY(-7px);\n          transform: translateY(-7px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-sidebar {\n  width: 275px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./GoalCard.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/lib/loader.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !!_vm.expiring.length
    ? _c("div", [
        _c(
          "div",
          { staticClass: "bg-blue text-center py-4 lg:px-4" },
          [
            _c("router-link", { attrs: { to: "/t/users" } }, [
              _c(
                "div",
                {
                  staticClass:
                    "p-2 bg-blue-light items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",
                  attrs: { role: "alert" }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "flex rounded-full bg-blue-lighter uppercase px-1 py-1 text-xs font-bold mr-3 text-white"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current w-4 h-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "font-semibold mr-2 text-left flex-auto text-white"
                    },
                    [_vm._v("Some users need your attention.")]
                  ),
                  _vm._v(" "),
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current text-white opacity-75 h-4 w-4",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "avatar",
    class: { supersize: _vm.supersize },
    style: {
      background: _vm.backgroundColor,
      height: _vm.size + "px",
      width: _vm.size + "px",
      fontSize: _vm.size / 2.5 + "px"
    },
    domProps: { textContent: _vm._s(_vm.initials) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Block.vue?vue&type=template&id=06572eb2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Block.vue?vue&type=template&id=06572eb2& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    {
      staticClass: "block w-full lg:w-1/3 md:w-1/2 p-2",
      attrs: {
        "active-class": "none",
        to: { name: _vm.name, params: _vm.params }
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "w-full bg-white rounded-lg shadow-lg cursor-pointer",
          class: {
            "bg-red-gradient": _vm.block.type.name === "strength",
            "bg-blue-gradient": _vm.block.type.name === "hypertrophy",
            "bg-green-gradient": _vm.block.type.name === "fitness"
          }
        },
        [
          _c("div", { staticClass: "flex items-center p-6 rounded-lg" }, [
            _c("div", { staticClass: "mr-4" }, [
              _c(
                "div",
                {
                  staticClass:
                    "w-18 h-18 px-4 bg-white rounded-full flex items-center justify-center"
                },
                [_c("img", { attrs: { src: _vm.icon.url, alt: _vm.icon.alt } })]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-col" }, [
              _c("h3", { staticClass: "text-white text-lg font-bold mb-2" }, [
                _vm._v(_vm._s(_vm.block.name))
              ]),
              _vm._v(" "),
              _c(
                "h4",
                { staticClass: "text-white text-base font-light opacity-75" },
                [
                  _vm._v(
                    _vm._s(
                      _vm.$moment(_vm.block.start_date).format("MMMM Do 'YY")
                    )
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex py-4 px-8 justify-between items-center" },
            [
              _c(
                "span",
                {
                  staticClass:
                    "uppercase text-xs text-white font-semibold opacity-75"
                },
                [_vm._v(_vm._s(_vm.block.workouts.length) + " Workouts")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-medium description-pill uppercase"
                },
                [_vm._v(_vm._s(_vm.block.type.name))]
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "w-full py-20", class: _vm.type }, [
      _c("div", { staticClass: "container mx-auto px-0" }, [
        _c("h1", { staticClass: "text-white font-bold text-2xl mb-2 px-8" }, [
          _vm._v(_vm._s(_vm.heading))
        ]),
        _vm._v(" "),
        _c(
          "h4",
          {
            staticClass: "text-white font-normal text-base opacity-75 px-8 mb-4"
          },
          [_vm._v(_vm._s(_vm.subheading))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass:
              "text-center inline-block w-auto mx-8 py-1 px-4 rounded-full text-xs text-white font-medium uppercase description-pill"
          },
          [_vm._v(_vm._s(_vm.type))]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.isTrainer
      ? _c(
          "div",
          {
            staticClass: "w-full bg-grey-lightest border-b border-grey-lighter"
          },
          [
            _c("div", { staticClass: "container mx-auto px-8 flex" }, [
              _c(
                "div",
                { staticClass: "inline-block flex items-center py-6" },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current text-grey-dark",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "text-grey-dark hover:text-red text-xs font-semibold uppercase mr-4",
                      attrs: {
                        to: {
                          name: "user",
                          params: { id: _vm.$route.params.user_id }
                        },
                        "active-class": "none"
                      }
                    },
                    [_vm._v("Back to User")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.action
                ? _c(
                    "div",
                    {
                      staticClass:
                        "inline-block flex items-center border-r border-l border-grey-lighter py-6"
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "text-grey-dark hover:text-red text-xs font-semibold uppercase mx-4",
                          attrs: {
                            to: {
                              name: _vm.action.name,
                              params: _vm.action.params
                            },
                            "active-class": "none"
                          }
                        },
                        [_vm._v(_vm._s(_vm.action.text))]
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.deleteBlock
                ? _c(
                    "div",
                    {
                      staticClass:
                        "inline-block flex items-center border-r border-grey-lighter py-6"
                    },
                    [
                      _c(
                        "delete-modal",
                        { on: { "accept-delete-modal": _vm.onDelete } },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "text-grey-dark hover:text-red text-xs font-semibold uppercase mx-4 focus:outline-none"
                            },
                            [_vm._v("Delete")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "container mx-auto flex justify-center items-center" },
      [
        _c("img", {
          staticClass: "h-48",
          attrs: { src: "/images/construction.svg", alt: "Under Construction" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "context relative" },
    [
      _c(
        "div",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.isOpen = !_vm.isOpen
            }
          }
        },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "pop-out-quick" } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isOpen,
                expression: "isOpen"
              }
            ],
            staticClass:
              "context-menu flex list-reset absolute bg-white mt-2 py-2 px-2 rounded shadow-lg text-white z-10 pin-r"
          },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.isVisible = true
            }
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isVisible,
                expression: "isVisible"
              }
            ],
            staticClass:
              "bg-grey-translucent w-full h-screen flex items-center justify-center fixed pin-t pin-l z-50 p-2"
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "modal bg-white rounded shadow-lg p-8 max-w-sm w-full"
              },
              [
                _c("div", { staticClass: "flex mb-4" }, [
                  _c("img", {
                    staticClass: "w-12 h-12 mr-8",
                    attrs: { src: "/images/warning.svg", alt: "Warning" }
                  }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "mb-2 text-grey-darkest text-lg font-medium"
                      },
                      [_vm._v("Are you sure you want to delete?")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "mb-8 text-grey-darkest text-sm font-normal"
                      },
                      [_vm._v("This action cannot be undone.")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "flex justify-end" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "text-grey-darker font-normal text-sm py-2 pl-6 pr-2 rounded-full focus:outline-none uppercase",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.isVisible = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
              ]
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "goal-card h-48 w-32 bg-grey-light rounded p-4 ml-2 text-center"
    },
    [
      !_vm.loading
        ? _c("div", [
            _c("div", { staticClass: "w-full h-18 mb-4 flex justify-center" }, [
              _c(
                "div",
                {
                  staticClass: "h-18 w-18 rounded-full bg-white p-3 shadow-lg"
                },
                [_c("img", { attrs: { src: _vm.icon, alt: "Goals" } })]
              )
            ]),
            _vm._v(" "),
            _c("h2", {
              staticClass: "text-grey-darkest text-xl font-bold mb-2",
              domProps: { textContent: _vm._s(_vm.count) }
            }),
            _vm._v(" "),
            _c("h3", {
              staticClass: "text-grey-darkest text-base font-medium",
              domProps: { textContent: _vm._s(_vm.text) }
            })
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    {
      staticClass:
        "w-full px-6 py-2 flex justify-between items-center bg-white transition-all z-50"
    },
    [
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _c("login-form", {
            directives: [
              {
                name: "scroll-lock",
                rawName: "v-scroll-lock",
                value: _vm.showLogin,
                expression: "showLogin"
              }
            ],
            attrs: { "is-toggled": _vm.showLogin },
            on: { "logged-in": _vm.successfulLogin }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.showLogin
          ? _c(
              "div",
              {
                staticClass:
                  "absolute pin-r pin-t mr-6 mt-6 h-8 w-8 cursor-pointer",
                on: { click: _vm.login }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current text-grey-darkest",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                      }
                    })
                  ]
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.showDrawer
          ? _c("div", {
              staticClass:
                "w-full h-screen bg-grey-translucent absolute pin-t pin-l pin-b z-50",
              on: { click: _vm.openDrawer }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide" } }, [
        _vm.showDrawer
          ? _c(
              "div",
              {
                staticClass:
                  "absolute bg-white w-64 h-screen shadow-lg pin-t pin-r pin-b z-50"
              },
              [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "scroll-lock",
                        rawName: "v-scroll-lock",
                        value: _vm.showDrawer,
                        expression: "showDrawer"
                      }
                    ],
                    staticClass:
                      "absolute pin-r pin-t mr-4 mt-4 h-8 w-8 cursor-pointer",
                    on: { click: _vm.openDrawer }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-grey",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "pb-4 flex items-center flex-col px-4 pt-24" },
                  [
                    _c("div", { staticClass: "rounded-full bg-grey p-2" }, [
                      _c(
                        "div",
                        { staticClass: "rounded-full bg-white p-1" },
                        [
                          _c("avatar", {
                            attrs: {
                              first: _vm.user.first_name,
                              last: _vm.user.last_name,
                              size: "75"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "h6",
                      {
                        staticClass:
                          "text-center text-xl font-hairline text-grey-darkest mb-4 pt-8"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.user.first_name + " " + _vm.user.last_name)
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "list-reset" }, [
                  _c(
                    "li",
                    {
                      staticClass:
                        "block px-8 py-2 hover:bg-grey-lighter text-grey-darkest cursor-pointer text-center",
                      on: { click: _vm.openDrawer }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-grey-darkest",
                          attrs: {
                            "active-class": "blank",
                            "exact-active-class": "blank",
                            to: "/u/profile"
                          }
                        },
                        [_vm._v("Settings")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass:
                        "block px-8 py-2 hover:bg-grey-lighter text-grey-darkest cursor-pointer text-center",
                      on: { click: _vm.logout }
                    },
                    [_vm._v("Logout")]
                  )
                ])
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.showMenu
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "scroll-lock",
                    rawName: "v-scroll-lock",
                    value: _vm.showMenu,
                    expression: "showMenu"
                  }
                ],
                staticClass:
                  "absolute w-full pin-t pin-l h-screen bg-grey-gradient flex flex-col justify-center items-center z-50"
              },
              [
                _c("ul", { staticClass: "list-reset" }, [
                  _c(
                    "li",
                    {
                      staticClass: "text-center mb-4",
                      on: { click: _vm.openMenu }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-white font-bold text-3xl mb-4",
                          attrs: {
                            "exact-active-class": "popover-active-exact",
                            "active-class": "blank",
                            to: "/u/overview",
                            exact: ""
                          }
                        },
                        [_vm._v("Overview")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "text-center mb-4",
                      on: { click: _vm.openMenu }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-white font-bold text-3xl mb-4",
                          attrs: {
                            "exact-active-class": "popover-active-exact",
                            "active-class": "blank",
                            to: "/u/workouts",
                            exact: ""
                          }
                        },
                        [_vm._v("Workouts")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "text-center mb-4",
                      on: { click: _vm.openMenu }
                    },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-white font-bold text-3xl mb-4",
                          attrs: {
                            "exact-active-class": "popover-active-exact",
                            "active-class": "blank",
                            to: "/u/goals",
                            exact: ""
                          }
                        },
                        [_vm._v("Goals")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "text-center mb-4",
                      on: { click: _vm.openMenu }
                    },
                    [
                      _vm.isTrainer
                        ? _c(
                            "router-link",
                            {
                              staticClass: "text-white font-bold text-3xl mb-4",
                              attrs: {
                                "exact-active-class": "popover-active-exact",
                                "active-class": "blank",
                                to: "/t/",
                                exact: ""
                              }
                            },
                            [_vm._v("Trainer")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "text-center mb-4",
                      on: { click: _vm.openMenu }
                    },
                    [
                      _vm.isAdmin
                        ? _c(
                            "router-link",
                            {
                              staticClass: "text-white font-bold text-3xl mb-4",
                              attrs: {
                                "exact-active-class": "popover-active-exact",
                                "active-class": "blank",
                                to: "/a/admin",
                                exact: ""
                              }
                            },
                            [_vm._v("Admin")]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "absolute pin-r pin-t mr-4 mt-4 h-8 w-8 cursor-pointer",
                    on: { click: _vm.openMenu }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-white",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                          }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "router-link",
        {
          attrs: {
            "exact-active-class": "none",
            "active-class": "none",
            to: "/"
          }
        },
        [
          _c("div", { staticClass: "flex items-center" }, [
            _c("div", { staticClass: "mr-2" }, [
              _c("img", {
                attrs: {
                  src: "/images/Logo.png",
                  alt: "Gerbzilla Powerlifting"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex-col flex" }, [
              _c(
                "span",
                { staticClass: "text-lg text-red font-bold uppercase" },
                [_vm._v("Gerbzilla")]
              ),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "text-sm text-grey font-thin uppercase" },
                [_vm._v("Powerlifting")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center" },
        [
          _vm._t("default"),
          _vm._v(" "),
          !_vm.authorized
            ? _c("nav", [
                _c("ul", { staticClass: "list-reset mr-6" }, [
                  _c(
                    "li",
                    {
                      staticClass:
                        "cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white uppercase",
                      on: { click: _vm.login }
                    },
                    [_vm._v("Login")]
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.authorized
            ? _c("div", { on: { click: _vm.openMenu } }, [
                _c(
                  "svg",
                  {
                    staticClass:
                      "cursor-pointer fill-current text-grey-darkest mr-4 md:hidden",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "34",
                      height: "34",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: { d: "M4 6H20V8H4zM8 11H20V13H8zM13 16H20V18H13z" }
                    })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.authorized
            ? _c(
                "div",
                {
                  staticClass: "flex items-center cursor-pointer",
                  on: { click: _vm.openDrawer }
                },
                [
                  _c("span", {
                    staticClass:
                      "text-sm font-medium text-grey-darker mx-4 hidden md:block",
                    domProps: { textContent: _vm._s(_vm.user.first_name) }
                  }),
                  _vm._v(" "),
                  _c("avatar", {
                    attrs: {
                      first: _vm.user.first_name,
                      last: _vm.user.last_name
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "w-full flex p-1 flex-wrap" }, [
      _c("div", { staticClass: "w-full sm:w-1/2 p-1" }, [
        _c("img", {
          attrs: { src: "https://source.unsplash.com/random", alt: "Random" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-full sm:w-1/2 flex flex-wrap" }, [
        _c("div", { staticClass: "w-1/2 p-1" }, [
          _c("img", {
            attrs: { src: "https://source.unsplash.com/random", alt: "Random" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 p-1" }, [
          _c("img", {
            attrs: { src: "https://source.unsplash.com/random", alt: "Random" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 p-1" }, [
          _c("img", {
            attrs: { src: "https://source.unsplash.com/random", alt: "Random" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "w-1/2 p-1" }, [
          _c("img", {
            attrs: { src: "https://source.unsplash.com/random", alt: "Random" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-full absolute pt-20 bg-white h-screen z-10",
      class: { "opacity-50": _vm.translucent }
    },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex flex-col items-center" }, [
      _c("div", [
        _c("img", { attrs: { src: "/images/puff.svg", alt: "Loading" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-full md:h-24 flex justify-center items-end" },
    [
      _c("nav", { staticClass: "hidden md:block" }, [
        _c("ul", { staticClass: "list-reset" }, [
          _c(
            "li",
            {
              staticClass:
                "inline-block mx-8 pb-4 border-b-4 border-transparent"
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darkest font-base",
                  attrs: { to: "/u/overview", exact: "" }
                },
                [_vm._v("Overview")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass:
                "inline-block mx-8 pb-4 border-b-4 border-transparent"
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darkest",
                  attrs: { to: "/u/workouts" }
                },
                [_vm._v("Workouts")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass:
                "inline-block mx-8 pb-4 border-b-4 border-transparent"
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darkest",
                  attrs: { to: "/u/goals", exact: "" }
                },
                [_vm._v("Goals")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.isTrainer
            ? _c(
                "li",
                {
                  staticClass:
                    "inline-block mx-8 pb-4 border-b-4 border-transparent"
                },
                [
                  _c(
                    "router-link",
                    { staticClass: "text-grey-darkest", attrs: { to: "/t/" } },
                    [_vm._v("Trainer")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isAdmin
            ? _c(
                "li",
                {
                  staticClass:
                    "inline-block mx-8 pb-4 border-b-4 border-transparent"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "text-grey-darkest",
                      attrs: { to: "/a/admin", exact: "" }
                    },
                    [_vm._v("Admin")]
                  )
                ],
                1
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Whoops, Not Found!")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "w-full bg-grey py-20" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "w-full py-4 bg-grey-lighter border-b border-t border-grey-light"
    },
    [
      _c("div", { staticClass: "px-8 container mx-auto" }, [
        _c("ul", { staticClass: "list-reset" }, [
          _c(
            "li",
            { staticClass: "inline-block" },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darker mr-4",
                  attrs: {
                    "exact-active-class": "router-link-active-alt",
                    to: "/t/users",
                    exact: ""
                  }
                },
                [_vm._v("Users")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "inline-block" },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darker mr-4",
                  attrs: {
                    "exact-active-class": "router-link-active-alt",
                    to: "/t/exercises",
                    exact: ""
                  }
                },
                [_vm._v("Exercises")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "drop" } }, [
    _vm.$store.getters.getMsg.show
      ? _c(
          "div",
          {
            staticClass:
              "w-full max-w-xs bg-white rounded-lg shadow-lg p-4 z-50 fixed pin-t pin-center mt-4 flex items-center"
          },
          [
            _vm.$store.getters.getMsg.type === "success"
              ? _c("img", {
                  staticClass: "mr-4",
                  attrs: { src: "/images/check-circle.svg", alt: "Success" }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.$store.getters.getMsg.type === "error"
              ? _c("img", {
                  staticClass: "mr-4 fill-current text-red",
                  attrs: { src: "/images/bxs-error-alt.svg", alt: "Error" }
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "text-grey-darkest" }, [
              _vm._v(_vm._s(_vm.$store.getters.getMsg.message))
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "w-full py-4 bg-grey-lighter border-b border-grey-light" },
    [
      _c("div", { staticClass: "container mx-auto px-8" }, [
        _c("ul", { staticClass: "list-reset" }, [
          _c(
            "li",
            { staticClass: "inline-block" },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darker mr-4",
                  attrs: {
                    "exact-active-class": "router-link-active-alt",
                    to: "/u/workouts/week",
                    exact: ""
                  }
                },
                [_vm._v("Week")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "inline-block" },
            [
              _c(
                "router-link",
                {
                  staticClass: "text-grey-darker mr-4",
                  attrs: {
                    "exact-active-class": "router-link-active-alt",
                    to: "/u/workouts/blocks",
                    exact: ""
                  }
                },
                [_vm._v("Training Blocks")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
        }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "min-h-500" }, [
    _c("div", { staticClass: "w-full" }, [
      _c(
        "ul",
        { staticClass: "list-reset border-b mx-8" },
        _vm._l(_vm.tabs, function(tab) {
          return _c(
            "li",
            {
              key: tab.name,
              staticClass:
                "inline-block px-8 py-4 border-b-2 border-transparent text-xs text-grey-dark uppercase font-bold hover:text-red cursor-pointer",
              class: { "border-red": tab.isActive },
              attrs: { href: tab.href },
              on: {
                click: function($event) {
                  return _vm.selectTab(tab)
                }
              }
            },
            [_vm._v(_vm._s(tab.name))]
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("main", { staticClass: "flex-1 py-12" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("test")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full lg:w-1/3 md:w-1/2 p-1" }, [
    _c(
      "div",
      {
        staticClass:
          "card flex flex-col justify-end relative rounded shadow overflow-hidden",
        class: { "cursor-pointer": _vm.type !== "rest" },
        style: { background: _vm.gradient.default },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.onClick($event)
          }
        }
      },
      [
        _c("div", { staticClass: "flex-1" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center p-6" }, [
          _c("div", { staticClass: "mr-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "w-18 h-18 px-4 bg-white rounded-full flex items-center justify-center"
              },
              [_c("img", { attrs: { src: _vm.icon.url, alt: _vm.icon.alt } })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex flex-col" }, [
            _c("h3", {
              staticClass: "text-white text-lg font-bold mb-2",
              domProps: { textContent: _vm._s(_vm.date) }
            }),
            _vm._v(" "),
            _c("h4", {
              staticClass: "text-white text-base font-normal opacity-75",
              domProps: { textContent: _vm._s(_vm.name) }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-slug flex pb-6 px-6 justify-start items-center"
          },
          [
            _c("span", {
              staticClass:
                "text-center block w-auto py-1 px-2 rounded-full text-xs text-white font-medium description-pill uppercase",
              domProps: { textContent: _vm._s(_vm.type) }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    { staticClass: "w-full md:w-1/2 lg:w-1/3 mb-4" },
    [
      _c(
        "router-link",
        {
          attrs: {
            to: {
              name: "workout",
              params: {
                user_id: _vm.userId,
                block_id: _vm.blockId,
                workout_id: _vm.workout.id
              }
            },
            "active-class": "none"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-center"
            },
            [
              _c("div", { staticClass: "flex items-center" }, [
                _c("div", [
                  _c(
                    "h2",
                    { staticClass: "text-lg text-grey-darkest font-bold mb-1" },
                    [_vm._v(_vm._s(_vm.workout.name))]
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-base text-blue font-normal" }, [
                    _vm._v(
                      _vm._s(
                        _vm.$moment(_vm.workout.date).format("dddd, MMM Do")
                      )
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "items-center flex cursor-pointer" },
                [
                  _c(
                    "context-menu",
                    {
                      scopedSlots: _vm._u([
                        {
                          key: "trigger",
                          fn: function() {
                            return [
                              _c(
                                "svg",
                                {
                                  staticClass: "fill-current text-grey-darkest",
                                  attrs: {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z"
                                    }
                                  })
                                ]
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "inline-block mx-1" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "border border-grey-darker block p-2 h-10 w-10 rounded text-grey-darker hover:bg-grey-darker hover:text-white",
                              attrs: {
                                to: {
                                  name: "duplicate-workout",
                                  params: {
                                    user_id: _vm.userId,
                                    workout_id: _vm.workout.id
                                  }
                                },
                                "active-class": "none"
                              }
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "fill-current",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M4,22h12c1.104,0,2-0.896,2-2V8c0-1.104-0.896-2-2-2H4C2.896,6,2,6.896,2,8v12C2,21.104,2.896,22,4,22z M6,13h3v-3h2v3h3v2 h-3v3H9v-3H6V13z"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M20,2H8v2h12v12h2V4C22,2.897,21.103,2,20,2z"
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full max-w-md px-8" }, [
    _c("h1", { staticClass: "text-grey-darkest font-normal text-2xl mb-10" }, [
      _vm._v("Create Block")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          },
          keydown: function($event) {
            return _vm.form.errors.clear()
          }
        }
      },
      [
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "name" }
            },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "name", type: "text", name: "name" },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("name")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: { textContent: _vm._s(_vm.form.errors.get("name")) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "start_date" }
            },
            [_vm._v("Start Date")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.start_date,
                expression: "form.start_date"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "date", type: "date", name: "start_date" },
            domProps: { value: _vm.form.start_date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "start_date", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("start_date")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("start_date"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-12" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "type_id" }
            },
            [_vm._v("Category")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "relative" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.type_id,
                    expression: "form.type_id"
                  }
                ],
                staticClass:
                  "block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none capitalize",
                attrs: { id: "category", name: "type_id" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.form,
                      "type_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.types, function(type) {
                return _c(
                  "option",
                  { key: type.id, domProps: { value: type.id } },
                  [_vm._v(_vm._s(type.name))]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current h-4 w-4",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm.form.errors.has("type_id")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("type_id"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "submit" }
          },
          [_vm._v("Create Block")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$emit("cancel-block-create")
              }
            }
          },
          [_vm._v("Cancel")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mx-auto px-8 py-20" }, [
    _c("div", { staticClass: "w-full max-w-md" }, [
      _c(
        "h1",
        { staticClass: "text-grey-darkest font-normal text-2xl mb-10" },
        [_vm._v("Create Exercise")]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.onSubmit($event)
            },
            keydown: function($event) {
              return _vm.form.errors.clear($event.target.name)
            }
          }
        },
        [
          _c("div", { staticClass: "mb-6" }, [
            _c(
              "label",
              {
                staticClass: "block text-grey-darker text-sm font-normal mb-4",
                attrs: { for: "name" }
              },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              staticClass:
                "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
              attrs: { id: "name", type: "text", name: "name" },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.form.errors.has("name")
              ? _c("span", {
                  staticClass: "text-red text-xs pt-2",
                  domProps: { textContent: _vm._s(_vm.form.errors.get("name")) }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-12" }, [
            _c(
              "label",
              {
                staticClass: "block text-grey-darker text-sm font-normal mb-4",
                attrs: { for: "category" }
              },
              [_vm._v("Category")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "relative" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.category_id,
                      expression: "form.category_id"
                    }
                  ],
                  staticClass:
                    "block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none",
                  attrs: { id: "category", name: "category_id" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "category_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.categories, function(category) {
                  return _c(
                    "option",
                    { key: category.id, domProps: { value: category.id } },
                    [_vm._v(_vm._s(category.name))]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current h-4 w-4",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm.form.errors.has("category_id")
                ? _c("span", {
                    staticClass: "text-red text-xs pt-2",
                    domProps: {
                      textContent: _vm._s(_vm.form.errors.get("category_id"))
                    }
                  })
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
              attrs: { type: "submit" }
            },
            [_vm._v("Create Exercise")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.$emit("close-exercise-create")
                }
              }
            },
            [_vm._v("Cancel")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "px-4" }, [
    _c("h1", { staticClass: "text-grey-darkest font-normal text-2xl mb-10" }, [
      _vm._v("Add Exercise")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "max-w-md",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          },
          keydown: function($event) {
            return _vm.form.errors.clear($event.target.name)
          }
        }
      },
      [
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "sets" }
            },
            [_vm._v("Sets")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.num_sets,
                expression: "form.num_sets"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "sets", type: "text", name: "num_sets" },
            domProps: { value: _vm.form.num_sets },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "num_sets", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("num_sets")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("num_sets"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "notes" }
            },
            [_vm._v("Notes")]
          ),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.notes,
                expression: "form.notes"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "notes", name: "notes" },
            domProps: { value: _vm.form.notes },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "notes", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("notes")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: { textContent: _vm._s(_vm.form.errors.get("notes")) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-12" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "category" }
            },
            [_vm._v("Exercise")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "relative" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.exercise_id,
                    expression: "form.exercise_id"
                  }
                ],
                staticClass:
                  "block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none",
                attrs: { id: "exercise", name: "exercise_id", multiple: "" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.form,
                      "exercise_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.exercises, function(exercise) {
                return _c(
                  "option",
                  { key: exercise.id, domProps: { value: exercise.id } },
                  [_vm._v(_vm._s(exercise.name))]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _vm.form.errors.has("exercise_id")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("exercise_id"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "submit" }
          },
          [_vm._v("Create Exercise")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$emit("close-set-create")
              }
            }
          },
          [_vm._v("Cancel")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "px-8 py-20" }, [
    _c("h1", { staticClass: "text-grey-darkest font-normal text-2xl mb-10" }, [
      _vm._v("Create User")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "max-w-md",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          },
          keydown: function($event) {
            return _vm.form.errors.clear($event.target.name)
          }
        }
      },
      [
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "firstname" }
            },
            [_vm._v("First Name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.first_name,
                expression: "form.first_name"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "firstname", type: "text", name: "first_name" },
            domProps: { value: _vm.form.first_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "first_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("first_name")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("last_name"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "lastname" }
            },
            [_vm._v("Last Name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.last_name,
                expression: "form.last_name"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "lastname", type: "text", name: "last_name" },
            domProps: { value: _vm.form.last_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "last_name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("last_name")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("last_name"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "email" }
            },
            [_vm._v("Email")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.email,
                expression: "form.email"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "email", type: "email", name: "email" },
            domProps: { value: _vm.form.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "email", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("email")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: { textContent: _vm._s(_vm.form.errors.get("email")) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "password" }
            },
            [_vm._v("Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password,
                expression: "form.password"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "password", type: "password" },
            domProps: { value: _vm.form.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("password")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("password"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-12" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "confirmpassword" }
            },
            [_vm._v("Confirm Password")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.password_confirmation,
                expression: "form.password_confirmation"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
            attrs: {
              id: "confirmpassword",
              type: "password",
              name: "password_confirmation"
            },
            domProps: { value: _vm.form.password_confirmation },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "password_confirmation", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("password")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: {
                  textContent: _vm._s(_vm.form.errors.get("password"))
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "submit" }
          },
          [_vm._v("Create User")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$emit("close-user-create")
              }
            }
          },
          [_vm._v("Cancel")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "max-w-md w-full bg-white" }, [
    _c("h1", { staticClass: "text-grey-darkest font-normal text-2xl mb-10" }, [
      _vm._v("Create Workout")
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          },
          keydown: function($event) {
            return _vm.form.errors.clear()
          }
        }
      },
      [
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "name" }
            },
            [_vm._v("Name")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.name,
                expression: "form.name"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "name", name: "name", type: "text" },
            domProps: { value: _vm.form.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("name")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: { textContent: _vm._s(_vm.form.errors.get("name")) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-6" }, [
          _c(
            "label",
            {
              staticClass: "block text-grey-darker text-sm font-normal mb-4",
              attrs: { for: "date" }
            },
            [_vm._v("Date")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.date,
                expression: "form.date"
              }
            ],
            staticClass:
              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
            attrs: { id: "date", name: "date", type: "date" },
            domProps: { value: _vm.form.date },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "date", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _vm.form.errors.has("date")
            ? _c("span", {
                staticClass: "text-red text-xs pt-2",
                domProps: { textContent: _vm._s(_vm.form.errors.get("date")) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "submit" }
          },
          [_vm._v("Create Workout")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.$emit("close-workout-create")
              }
            }
          },
          [_vm._v("Cancel")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "div",
        {
          directives: [
            {
              name: "scroll-lock",
              rawName: "v-scroll-lock",
              value: _vm.show,
              expression: "show"
            }
          ],
          staticClass:
            "fixed pin-t pin-l pin-r pin-b z-50 flex justify-center items-center px-2 bg-grey-translucent"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "relative max-w-md w-full bg-white p-8 shadow-lg rounded-lg"
            },
            [
              _c(
                "h1",
                { staticClass: "text-grey-darkest font-normal text-2xl mb-10" },
                [_vm._v("Duplicate Workout")]
              ),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass:
                        "absolute pin-t pin-l pin-b w-full bg-white-translucent flex justify-center items-center"
                    },
                    [
                      _c("img", {
                        attrs: { src: "/images/puff.svg", alt: "Loading" }
                      })
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createWorkout($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c(
                      "label",
                      {
                        staticClass:
                          "block text-grey-darker text-sm font-normal mb-4",
                        attrs: { for: "date" }
                      },
                      [_vm._v("Date")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.date,
                          expression: "date"
                        }
                      ],
                      staticClass:
                        "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
                      attrs: { id: "date", type: "date" },
                      domProps: { value: _vm.date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.date = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Duplicate")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                      attrs: { type: "button" },
                      on: { click: _vm.closeWindow }
                    },
                    [_vm._v("Cancel")]
                  )
                ]
              )
            ]
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "z-50 absolute bg-white p-8 py-20 pin-l pin-t pin-r" },
    [
      _c(
        "div",
        {
          staticClass:
            "w-8 h-8 p-2 flex absolute pin-r pin-t border border-grey-dark justify-center items-center rounded-full mr-4 mt-4 cursor-pointer",
          on: { click: _vm.closeWindow }
        },
        [
          _c(
            "svg",
            {
              staticClass: "fill-current text-grey-dark",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "h1",
        { staticClass: "text-grey-darkest font-normal text-2xl mb-10" },
        [_vm._v("Edit Exercise")]
      ),
      _vm._v(" "),
      _c(
        "form",
        { staticClass: "max-w-md", on: { submit: _vm.createExercise } },
        [
          _c("div", { staticClass: "mb-6" }, [
            _c(
              "label",
              {
                staticClass: "block text-grey-darker text-sm font-normal mb-4",
                attrs: { for: "sets" }
              },
              [_vm._v("Sets")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.sets,
                  expression: "sets"
                }
              ],
              staticClass:
                "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
              attrs: { id: "sets", type: "text" },
              domProps: { value: _vm.sets },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.sets = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-6" }, [
            _c(
              "label",
              {
                staticClass: "block text-grey-darker text-sm font-normal mb-4",
                attrs: { for: "notes" }
              },
              [_vm._v("Notes")]
            ),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.notes,
                  expression: "notes"
                }
              ],
              staticClass:
                "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
              attrs: { id: "notes" },
              domProps: { value: _vm.notes },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.notes = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-12" }, [
            _c(
              "label",
              {
                staticClass: "block text-grey-darker text-sm font-normal mb-4",
                attrs: { for: "category" }
              },
              [_vm._v("Exercise")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "relative" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.exercise,
                      expression: "exercise"
                    }
                  ],
                  staticClass:
                    "block appearance-none border-b rounded-none bg-white text-grey-darker w-full py-2 leading-tight focus:outline-none",
                  attrs: { id: "exercise", multiple: "" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.exercise = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                _vm._l(_vm.exercises, function(exercise) {
                  return _c(
                    "option",
                    { key: exercise.id, domProps: { value: exercise.id } },
                    [_vm._v(_vm._s(exercise.name))]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
              attrs: { type: "submit" }
            },
            [_vm._v("Save Changes")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
              attrs: { type: "button" },
              on: { click: _vm.closeWindow }
            },
            [_vm._v("Cancel")]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isToggled
    ? _c(
        "div",
        {
          staticClass:
            "fixed pin-t pin-l bg-grey-lightest h-screen w-full flex items-start justify-center pt-32 z-50 px-8"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "bg-white max-w-sm shadow-lg rounded-lg overflow-hidden"
            },
            [
              _c("div", { staticClass: "sm:flex sm:items-center p-8" }, [
                _c(
                  "div",
                  { staticClass: "text-center sm:text-left sm:flex-grow" },
                  [
                    _c(
                      "p",
                      {
                        staticClass:
                          "text-xl text-center text-grey-darkest mb-8"
                      },
                      [_vm._v("Welcome Back!")]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.login($event)
                          }
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.username,
                              expression: "username"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-8 text-grey-darker leading-tight focus:outline-none",
                          attrs: {
                            id: "email",
                            type: "email",
                            placeholder: "Email"
                          },
                          domProps: { value: _vm.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.username = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-12 text-grey-darker leading-tight focus:outline-none",
                          attrs: {
                            id: "password",
                            type: "password",
                            placeholder: "Password"
                          },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-xs font-semibold rounded-full py-2 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white w-full uppercase",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Login")]
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          )
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container mx-auto mb-20 flex px-0 md:px-8 mt-20" },
    [
      _c("aside", { staticClass: "w-1/4 hidden md:block" }, [
        _c(
          "h1",
          { staticClass: "text-grey-darkest font-normal text-2xl mb-10 mx-2" },
          [_vm._v("Categories")]
        ),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-reset" },
          _vm._l(_vm.categories, function(category) {
            return _c(
              "li",
              {
                key: category.id,
                staticClass:
                  "hover:bg-grey-lightest p-2 rounded flex items-center"
              },
              [
                _c("label", { staticClass: "checkbox-container flex-1" }, [
                  _vm._v(
                    "\n          " + _vm._s(category.name) + "\n          "
                  ),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.checkedCategories,
                        expression: "checkedCategories"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      id: category.name,
                      name: category.name
                    },
                    domProps: {
                      value: category.id,
                      checked: Array.isArray(_vm.checkedCategories)
                        ? _vm._i(_vm.checkedCategories, category.id) > -1
                        : _vm.checkedCategories
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.checkedCategories,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = category.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.checkedCategories = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.checkedCategories = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.checkedCategories = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkbox-checkmark" })
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "bg-grey-lighter rounded-full float-right px-2 py-1"
                  },
                  [_vm._v(_vm._s(_vm.getNumExercises(category.id)))]
                )
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "flex-1" }, [
        _c("div", { staticClass: "px-4" }, [
          _c(
            "h1",
            {
              staticClass: "text-grey-darkest font-normal text-2xl mb-10 px-4"
            },
            [_vm._v(_vm._s(_vm.heading))]
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "list-reset px-4 md:px-0" },
            _vm._l(_vm.filteredExercises, function(exercise) {
              return _c(
                "li",
                {
                  key: exercise.id,
                  staticClass:
                    "w-full py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center bg-white shadow-lg md:shadow-none mb-4 md:mb-0"
                },
                [
                  _c("span", { staticClass: "rounded-full mr-6 h-12 w-12" }, [
                    _c("img", {
                      attrs: {
                        width: "100",
                        height: "100",
                        src: _vm.getCategoryIcon(exercise),
                        alt: "Icon"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-grey-darkest mr-6" }, [
                    _vm._v(_vm._s("" + exercise.name))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "flex-1" }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass:
                        "h-10 w-10 rounded-full bg-grey-light flex items-center justify-center"
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-current text-grey-darkest",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d:
                                "M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              d:
                                "M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.showFilterMenu
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "closable",
                    rawName: "v-closable",
                    value: {
                      exclude: ["button"],
                      handler: "toggleFilterMenu"
                    },
                    expression:
                      "{\n        exclude: ['button'],\n        handler: 'toggleFilterMenu'\n      }"
                  }
                ],
                staticClass:
                  "fixed bg-white shadow-lg p-8 pin-b pin-l pin-r ml-8 mr-8 mb-32 rounded-lg md:hidden"
              },
              [
                _c(
                  "h1",
                  {
                    staticClass: "text-grey-darkest font-normal text-2xl mb-10"
                  },
                  [_vm._v("Categories")]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-reset" },
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "li",
                      {
                        key: category.id,
                        staticClass:
                          "hover:bg-grey-lightest p-2 rounded flex items-center"
                      },
                      [
                        _c(
                          "label",
                          { staticClass: "checkbox-container flex-1" },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(category.name) +
                                "\n            "
                            ),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.checkedCategories,
                                  expression: "checkedCategories"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                id: category.name,
                                name: category.name
                              },
                              domProps: {
                                value: category.id,
                                checked: Array.isArray(_vm.checkedCategories)
                                  ? _vm._i(_vm.checkedCategories, category.id) >
                                    -1
                                  : _vm.checkedCategories
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.checkedCategories,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = category.id,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.checkedCategories = $$a.concat([
                                          $$v
                                        ]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.checkedCategories = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.checkedCategories = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "checkbox-checkmark" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-grey-lighter rounded-full float-right px-2 py-1"
                          },
                          [_vm._v(_vm._s(_vm.getNumExercises(category.id)))]
                        )
                      ]
                    )
                  }),
                  0
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "button",
          staticClass:
            "cursor-pointer fixed pin-b pin-l w-12 h-12 bg-white shadow-lg rounded-full ml-8 mb-8 flex items-center justify-center md:hidden",
          on: { click: _vm.toggleFilterMenu }
        },
        [
          _c(
            "svg",
            {
              staticClass: "fill-current text-grey-darkest",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "30",
                height: "30",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: { d: "M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" }
              })
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mx-auto" }, [
    _c(
      "div",
      { staticClass: "flex px-0 md:px-8 mt-20" },
      [
        _c("aside", { staticClass: "filter-sidebar hidden md:block" }, [
          _c("div", { staticClass: "relative" }, [
            _c("div", { staticClass: "absolute pin-r py-1 pr-2" }, [
              _c(
                "svg",
                {
                  staticClass: "fill-current text-grey-darkest",
                  attrs: { width: "24", height: "28", viewBox: "0 0 24 24" }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      d:
                        "M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.query,
                  expression: "query"
                }
              ],
              staticClass:
                "w-full border border-grey-light text-grey-darkest bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8",
              attrs: { type: "text", name: "search", placeholder: "Search" },
              domProps: { value: _vm.query },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.query = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass: "text-grey-darkest font-normal text-2xl mb-10 mx-2"
            },
            [_vm._v("Status")]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "list-reset" }, [
            _c(
              "li",
              {
                staticClass:
                  "hover:bg-grey-lighter p-2 rounded flex items-center"
              },
              [
                _c("label", { staticClass: "checkbox-container flex-1" }, [
                  _vm._v("\n            Active\n            "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.activity,
                        expression: "activity"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      id: "active",
                      name: "active",
                      value: "1"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.activity)
                        ? _vm._i(_vm.activity, "1") > -1
                        : _vm.activity
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.activity,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "1",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.activity = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.activity = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.activity = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkbox-checkmark" })
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "bg-grey-light text-grey-darkest rounded-full float-right px-2 py-1"
                  },
                  [_vm._v(_vm._s(_vm.getNumUsers(1)))]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "li",
              {
                staticClass:
                  "hover:bg-grey-lighter p-2 rounded flex items-center"
              },
              [
                _c("label", { staticClass: "checkbox-container flex-1" }, [
                  _vm._v("\n            Inactive\n            "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.activity,
                        expression: "activity"
                      }
                    ],
                    attrs: {
                      type: "checkbox",
                      id: "inactive",
                      name: "inactive",
                      value: "2"
                    },
                    domProps: {
                      checked: Array.isArray(_vm.activity)
                        ? _vm._i(_vm.activity, "2") > -1
                        : _vm.activity
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.activity,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "2",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.activity = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.activity = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.activity = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "checkbox-checkmark" })
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "bg-grey-light text-grey-darkest rounded-full float-right px-2 py-1"
                  },
                  [_vm._v(_vm._s(_vm.getNumUsers(2)))]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-1" }, [
          _c("div", { staticClass: "px-4" }, [
            _c("div", { staticClass: "px-4" }, [
              _c("div", { staticClass: "relative md:hidden" }, [
                _c("div", { staticClass: "absolute pin-r py-1 pr-2" }, [
                  _c(
                    "svg",
                    {
                      staticClass: "fill-current text-grey-darkest",
                      attrs: { width: "24", height: "28", viewBox: "0 0 24 24" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.query,
                      expression: "query"
                    }
                  ],
                  staticClass:
                    "w-full border border-grey-light bg-grey-lighter rounded-full px-4 py-2 focus:outline-none mb-8",
                  attrs: {
                    type: "text",
                    name: "search",
                    placeholder: "Search"
                  },
                  domProps: { value: _vm.query },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.query = $event.target.value
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _vm.showLastWeek
              ? _c(
                  "h1",
                  {
                    staticClass:
                      "text-grey-darkest font-normal text-2xl mb-10 px-4"
                  },
                  [_vm._v("Expiring")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showLastWeek
              ? _c(
                  "ul",
                  {
                    staticClass:
                      "list-reset px-4 md:px-0 mb-10 flex flex-wrap max-w-xl"
                  },
                  _vm._l(_vm.expiring, function(user) {
                    return _c(
                      "li",
                      {
                        key: user.id,
                        staticClass:
                          "w-full lg:w-1/2 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
                      },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "w-full flex items-center",
                            attrs: {
                              to: { name: "user", params: { id: user.id } }
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticClass: "rounded-full mr-6 overflow-hidden"
                              },
                              [
                                _c("avatar", {
                                  attrs: {
                                    first: user.first_name,
                                    last: user.last_name,
                                    size: 48
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "flex-1" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "block text-grey-darkest mr-6 font-medium"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      user.first_name + " " + user.last_name
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-blue text-sm mr-6" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      user.block_expiration
                                        ? _vm
                                            .$moment(user.block_expiration)
                                            .format("MMMM Do YYYY")
                                        : "Past expiration"
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "svg",
                                {
                                  staticClass: "fill-current",
                                  class: {
                                    "text-green": user.is_active === 1,
                                    "text-grey-dark": user.is_active === 2
                                  },
                                  attrs: {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 34 34"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      d:
                                        "M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                                    }
                                  })
                                ]
                              )
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "h1",
              {
                staticClass: "text-grey-darkest font-normal text-2xl mb-10 px-4"
              },
              [_vm._v(_vm._s(_vm.heading))]
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "list-reset px-4 md:px-0 flex flex-wrap max-w-xl"
              },
              _vm._l(_vm.filteredUsers, function(user) {
                return _c(
                  "li",
                  {
                    key: user.id,
                    staticClass:
                      "w-full lg:w-1/2 py-4 md:hover:bg-grey-lighter rounded-lg px-4 flex items-center shadow-lg md:shadow-none mb-4 md:mb-0 bg-white"
                  },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "flex items-center w-full",
                        attrs: { to: { name: "user", params: { id: user.id } } }
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "rounded-full mr-6 overflow-hidden" },
                          [
                            _c("avatar", {
                              attrs: {
                                first: user.first_name,
                                last: user.last_name,
                                size: 48
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex-1" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "block text-grey-darkest font-medium mr-6"
                            },
                            [
                              _vm._v(
                                _vm._s(user.first_name + " " + user.last_name)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-blue text-sm mr-6" },
                            [
                              _vm._v(
                                _vm._s(
                                  user.block_expiration
                                    ? _vm
                                        .$moment(user.block_expiration)
                                        .format("MMMM Do YYYY")
                                    : "Past expiration"
                                )
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "svg",
                            {
                              staticClass: "fill-current",
                              class: {
                                "text-green": user.is_active === 1,
                                "text-grey-dark": user.is_active === 2
                              },
                              attrs: {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 34 34"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                                }
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.showFilterMenu
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "closable",
                      rawName: "v-closable",
                      value: {
                        exclude: ["button"],
                        handler: "toggleFilterMenu"
                      },
                      expression:
                        "{\n        exclude: ['button'],\n        handler: 'toggleFilterMenu'\n      }"
                    }
                  ],
                  staticClass:
                    "fixed bg-white shadow-lg p-8 pin-b pin-l pin-r ml-8 mr-8 mb-32 rounded-lg md:hidden"
                },
                [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "text-grey-darkest font-normal text-2xl mb-10"
                    },
                    [_vm._v("Status")]
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-reset" }, [
                    _c(
                      "li",
                      {
                        staticClass:
                          "hover:bg-grey-lightest p-2 rounded flex items-center"
                      },
                      [
                        _c(
                          "label",
                          { staticClass: "checkbox-container flex-1" },
                          [
                            _vm._v("\n              Active\n              "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.activity,
                                  expression: "activity"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                id: "active",
                                name: "active",
                                value: "1"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.activity)
                                  ? _vm._i(_vm.activity, "1") > -1
                                  : _vm.activity
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.activity,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "1",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.activity = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.activity = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.activity = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "checkbox-checkmark" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-grey-lighter rounded-full float-right px-2 py-1"
                          },
                          [_vm._v(_vm._s(_vm.getNumUsers(1)))]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass:
                          "hover:bg-grey-lightest p-2 rounded flex items-center"
                      },
                      [
                        _c(
                          "label",
                          { staticClass: "checkbox-container flex-1" },
                          [
                            _vm._v("\n              Inactive\n              "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.activity,
                                  expression: "activity"
                                }
                              ],
                              attrs: {
                                type: "checkbox",
                                id: "inactive",
                                name: "inactive",
                                value: "2"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.activity)
                                  ? _vm._i(_vm.activity, "2") > -1
                                  : _vm.activity
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.activity,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "2",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.activity = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.activity = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.activity = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "checkbox-checkmark" })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-grey-lighter rounded-full float-right px-2 py-1"
                          },
                          [_vm._v(_vm._s(_vm.getNumUsers(2)))]
                        )
                      ]
                    )
                  ])
                ]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        !_vm.show
          ? _c(
              "div",
              {
                ref: "button",
                staticClass:
                  "cursor-pointer fixed pin-b pin-l w-12 h-12 bg-white shadow-lg rounded-full ml-8 mb-8 flex items-center justify-center md:hidden",
                on: { click: _vm.toggleFilterMenu }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current text-grey-darkest",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "30",
                      height: "30",
                      viewBox: "0 0 24 24"
                    }
                  },
                  [
                    _c("path", {
                      attrs: { d: "M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" }
                    })
                  ]
                )
              ]
            )
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-header", [
        _vm.authorized
          ? _c("nav", { staticClass: "hidden md:block" }, [
              _c("ul", { staticClass: "list-reset" }, [
                _c(
                  "li",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "text-grey-dark font-normal text-sm mb-4 uppercase mr-4",
                        attrs: {
                          "exact-active-class": "popover-active-exact",
                          "active-class": "blank",
                          to: "/u/overview",
                          exact: ""
                        }
                      },
                      [_vm._v("Overview")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "text-grey-dark font-normal text-sm mb-4 uppercase mr-4",
                        attrs: {
                          "exact-active-class": "popover-active-exact",
                          "active-class": "blank",
                          to: "/u/workouts",
                          exact: ""
                        }
                      },
                      [_vm._v("Workouts")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "text-grey-dark font-normal text-sm mb-4 uppercase mr-4",
                        attrs: {
                          "exact-active-class": "popover-active-exact",
                          "active-class": "blank",
                          to: "/u/goals",
                          exact: ""
                        }
                      },
                      [_vm._v("Goals")]
                    ),
                    _vm._v(" "),
                    _vm.isTrainer
                      ? _c(
                          "router-link",
                          {
                            staticClass:
                              "text-grey-dark font-normal text-sm mb-4 uppercase mr-4",
                            attrs: {
                              "exact-active-class": "popover-active-exact",
                              "active-class": "blank",
                              to: "/t/",
                              exact: ""
                            }
                          },
                          [_vm._v("Trainer")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isAdmin
                      ? _c(
                          "router-link",
                          {
                            staticClass:
                              "text-grey-dark font-normal text-sm mb-4 uppercase mr-4",
                            attrs: {
                              "exact-active-class": "popover-active-exact",
                              "active-class": "blank",
                              to: "/a/admin",
                              exact: ""
                            }
                          },
                          [_vm._v("Admin")]
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "h-screen max-h-700 bg-red-translucent w-full relative flex items-center"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "svg",
            {
              staticClass:
                "fill-current text-white absolute pin-b pin-l w-full",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1400 159.36"
              }
            },
            [
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M1137.84,1068.33c-5-3.24-10.75-8.46-9.77-4.08l1.84,4.18A12,12,0,0,1,1137.84,1068.33Z",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M1340.64,1050.48a31.6,31.6,0,0,0-10.28-1.66C1335.44,1050.84,1339.7,1054.2,1340.64,1050.48Z",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M696,1112.37c-1.89,1-2.64,1.93-2.5,2.89C695.48,1114.33,696.54,1113.39,696,1112.37Z",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M1318.74,1049.92c.75.37,1.47.52,2.22.82a28.85,28.85,0,0,1,9.4-1.92C1326.61,1047.31,1322.4,1046.55,1318.74,1049.92Z",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d: "M1424.19,1039.38",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M196,1159.93c.19.23.39.44.59.64A4.73,4.73,0,0,0,196,1159.93Z",
                  transform: "translate(0 -1040.64)"
                }
              }),
              _vm._v(" "),
              _c("path", {
                staticClass: "cls-1",
                attrs: {
                  d:
                    "M1385.43,1042.24c-4.26-.58-10.07,5.94-6.76,2.09l-13.61,4.07-.23-1.1c-13.74.72-27.47,10-43.87,3.44-4.5,1.56-9.13,3.38-17,2.84l-1.87-3.73c-5.78,1.9-18.12-2.21-20.28,2.06-7.36-9.81-28.91.42-39.49-.45l.08,5.09c-7.18.38-13.91,2.46-22.61,5.32l1,4.41c-7.32,4.38-20-1.33-32.07.27.66-1.79,3.78-1.63,6-.8-15.42-8.73-29.86,10.2-43.68,4.08a8.12,8.12,0,0,1-7.94.69,1.63,1.63,0,0,0,.79-.31,9.89,9.89,0,0,0-1.35.07c-1.51-.63-3.09-1.38-4.77-2a15.34,15.34,0,0,0,4.05,2,43.72,43.72,0,0,0-9.93,2.71l-2-4.65c-.3.1-.55.11-.86.22-3.84-1.42-2.74,2.55-.44,6a18.71,18.71,0,0,0-4.69,3.36c-3.72-7.46-9.6,3.53-14.45-4.34-2,3.94-16.22,4.7-19.27,11.66-4.23-.57-8.46-1.1-12,1.61l-2.35-5.93-8.36,9c-5.9-3.19-8.4-5.13-3.33-10.34-12.63,8.46-10.54,3.73-21.18,11.94l.18-4c-4,.53-10,6.42-12.74,3.39-9.75-6.64-44.85,3.16-68.72-1.63,5.59,11.19-11.28-4.19-11.36,4.9-1.61-2.62-5-3.87-1.45-6.61-11.6,3.81-18.21-2.68-25.68,5.67-1.62-2.63,2.15-4.26.79-5.78-.89.69-3.54,2.74-4.92,1.22s1.52-2.47,3.28-3.84c-12.06,1.6-12.49,10.17-12.63,18.19-6.48-3.18-9.5-2.36-13.44,3.26-2.38-2.4-6.19-4.78,1.24-6.42-4.27,0-26.2-1.38-26,5-1.47-1.49-6,.08-7,.92-9.53.51-10.42,0-19.69,1.49l2.69.8c-3,8-7.59,2.44-15,4.07l.14-.81c-17.75-3.92-7.19,3.35-24.79-1.38l1.38,4.69c-.63,10.42-15.64-4.64-25.13.21l3.81,2.39c-5.06,4-16.37-12.55-21.9-13.33-1.27-.78,1.73-1.61,3.31-2.42-14.74-4.73-1.25,6.43-11.67,8.87-2.26-3.19,1.7-8.82-5.46-8.78-3.8-2.4-19.59,12.89-29.89,7.33,2.38,2.4,4.75,4.79,0,7.21-7.43,1.63-21.24-7.93-27.26.91a2.84,2.84,0,0,1-1.55-1.91c-5.54,2.65-18.34,5.26-21.39,10-6.85-16-35,11.37-36.27-3.86l-17.59,2.48.31-1.6c-11.39,0-15,4.07-18.67,8.1-2.71-.8-.94-2.39-.8-3.21-16.79-1.52-18.37-.72-31.5,8.15l-1.9-4.79c-3.49,3.22-24.6-5.51-40.25,1.77a3.42,3.42,0,0,1,1.58-2.38c-17.68,7.5-44.9-9.6-49.89,9l-11.6,5.56c15.68-.06-1.59,8,5.09,10.4-6,1.63-16.32-3.94-8.89-5.57l1.26.79c1.88-9.62-19.64-1.51-19.82-7.92-30.56,3.33-60.87.94-89.57,3.22l4,7-10,.52c-2.78-1.46-4.05-5.37,3.11-5.74-4.14-3.78-11.64,4.58-11.7,6.18-14.24-1.64,4.66-9,.36-8.78l-5.76,1.09,1.39.73c-4.44,3.42-4.56,6.61-13.17,7.06-5.56-1-3.2-4.23-5.36-4.32,0-.51-.78-.69-3.3.1l-12.65.56,5.57,5.28c-5.32,3.36-11.87.81-5.45,6.78-9.47-9.25-47.33.8-52.86-1.83-7.43,4.92-15.15,5.57-24.76,6,2.49,1,4.51,7.3-3.81,7.28,1.72-13.28-14.78-4.83-22.62-12.71,3.73,5-23.5,3.45-13.7,11.29-7-.43-.88-4.95-6.4-7.6-15.89,6.7-36.41,0-56.49,3.67-.16,1.78,3.49,4.14-.61,7.15l-11.51-7.75c-3.92,1.23-2.74,10.45-10.61,5.06,1.17,1.37,2.92,3.45.29,4.26C65.09,1172.79,33,1184.48,0,1183v17H1400V1041.55C1395,1040.23,1389.08,1040.26,1385.43,1042.24ZM315.47,1151l2.1,1.07C313.24,1153.89,314.37,1152.53,315.47,1151Zm774.21-63.93c-.22-1.07-1.32-1.49.5-1.75A7,7,0,0,0,1089.68,1087.09Z",
                  transform: "translate(0 -1040.64)"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("section", { staticClass: "w-full bg-white relative pb-20" }, [
        _vm._m(4),
        _vm._v(" "),
        _c(
          "svg",
          {
            staticClass:
              "fill-current text-grey-lighter absolute pin-b pin-l w-full",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1400 159.36"
            }
          },
          [
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M1137.84,1068.33c-5-3.24-10.75-8.46-9.77-4.08l1.84,4.18A12,12,0,0,1,1137.84,1068.33Z",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M1340.64,1050.48a31.6,31.6,0,0,0-10.28-1.66C1335.44,1050.84,1339.7,1054.2,1340.64,1050.48Z",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M696,1112.37c-1.89,1-2.64,1.93-2.5,2.89C695.48,1114.33,696.54,1113.39,696,1112.37Z",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M1318.74,1049.92c.75.37,1.47.52,2.22.82a28.85,28.85,0,0,1,9.4-1.92C1326.61,1047.31,1322.4,1046.55,1318.74,1049.92Z",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d: "M1424.19,1039.38",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M196,1159.93c.19.23.39.44.59.64A4.73,4.73,0,0,0,196,1159.93Z",
                transform: "translate(0 -1040.64)"
              }
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "cls-1",
              attrs: {
                d:
                  "M1385.43,1042.24c-4.26-.58-10.07,5.94-6.76,2.09l-13.61,4.07-.23-1.1c-13.74.72-27.47,10-43.87,3.44-4.5,1.56-9.13,3.38-17,2.84l-1.87-3.73c-5.78,1.9-18.12-2.21-20.28,2.06-7.36-9.81-28.91.42-39.49-.45l.08,5.09c-7.18.38-13.91,2.46-22.61,5.32l1,4.41c-7.32,4.38-20-1.33-32.07.27.66-1.79,3.78-1.63,6-.8-15.42-8.73-29.86,10.2-43.68,4.08a8.12,8.12,0,0,1-7.94.69,1.63,1.63,0,0,0,.79-.31,9.89,9.89,0,0,0-1.35.07c-1.51-.63-3.09-1.38-4.77-2a15.34,15.34,0,0,0,4.05,2,43.72,43.72,0,0,0-9.93,2.71l-2-4.65c-.3.1-.55.11-.86.22-3.84-1.42-2.74,2.55-.44,6a18.71,18.71,0,0,0-4.69,3.36c-3.72-7.46-9.6,3.53-14.45-4.34-2,3.94-16.22,4.7-19.27,11.66-4.23-.57-8.46-1.1-12,1.61l-2.35-5.93-8.36,9c-5.9-3.19-8.4-5.13-3.33-10.34-12.63,8.46-10.54,3.73-21.18,11.94l.18-4c-4,.53-10,6.42-12.74,3.39-9.75-6.64-44.85,3.16-68.72-1.63,5.59,11.19-11.28-4.19-11.36,4.9-1.61-2.62-5-3.87-1.45-6.61-11.6,3.81-18.21-2.68-25.68,5.67-1.62-2.63,2.15-4.26.79-5.78-.89.69-3.54,2.74-4.92,1.22s1.52-2.47,3.28-3.84c-12.06,1.6-12.49,10.17-12.63,18.19-6.48-3.18-9.5-2.36-13.44,3.26-2.38-2.4-6.19-4.78,1.24-6.42-4.27,0-26.2-1.38-26,5-1.47-1.49-6,.08-7,.92-9.53.51-10.42,0-19.69,1.49l2.69.8c-3,8-7.59,2.44-15,4.07l.14-.81c-17.75-3.92-7.19,3.35-24.79-1.38l1.38,4.69c-.63,10.42-15.64-4.64-25.13.21l3.81,2.39c-5.06,4-16.37-12.55-21.9-13.33-1.27-.78,1.73-1.61,3.31-2.42-14.74-4.73-1.25,6.43-11.67,8.87-2.26-3.19,1.7-8.82-5.46-8.78-3.8-2.4-19.59,12.89-29.89,7.33,2.38,2.4,4.75,4.79,0,7.21-7.43,1.63-21.24-7.93-27.26.91a2.84,2.84,0,0,1-1.55-1.91c-5.54,2.65-18.34,5.26-21.39,10-6.85-16-35,11.37-36.27-3.86l-17.59,2.48.31-1.6c-11.39,0-15,4.07-18.67,8.1-2.71-.8-.94-2.39-.8-3.21-16.79-1.52-18.37-.72-31.5,8.15l-1.9-4.79c-3.49,3.22-24.6-5.51-40.25,1.77a3.42,3.42,0,0,1,1.58-2.38c-17.68,7.5-44.9-9.6-49.89,9l-11.6,5.56c15.68-.06-1.59,8,5.09,10.4-6,1.63-16.32-3.94-8.89-5.57l1.26.79c1.88-9.62-19.64-1.51-19.82-7.92-30.56,3.33-60.87.94-89.57,3.22l4,7-10,.52c-2.78-1.46-4.05-5.37,3.11-5.74-4.14-3.78-11.64,4.58-11.7,6.18-14.24-1.64,4.66-9,.36-8.78l-5.76,1.09,1.39.73c-4.44,3.42-4.56,6.61-13.17,7.06-5.56-1-3.2-4.23-5.36-4.32,0-.51-.78-.69-3.3.1l-12.65.56,5.57,5.28c-5.32,3.36-11.87.81-5.45,6.78-9.47-9.25-47.33.8-52.86-1.83-7.43,4.92-15.15,5.57-24.76,6,2.49,1,4.51,7.3-3.81,7.28,1.72-13.28-14.78-4.83-22.62-12.71,3.73,5-23.5,3.45-13.7,11.29-7-.43-.88-4.95-6.4-7.6-15.89,6.7-36.41,0-56.49,3.67-.16,1.78,3.49,4.14-.61,7.15l-11.51-7.75c-3.92,1.23-2.74,10.45-10.61,5.06,1.17,1.37,2.92,3.45.29,4.26C65.09,1172.79,33,1184.48,0,1183v17H1400V1041.55C1395,1040.23,1389.08,1040.26,1385.43,1042.24ZM315.47,1151l2.1,1.07C313.24,1153.89,314.37,1152.53,315.47,1151Zm774.21-63.93c-.22-1.07-1.32-1.49.5-1.75A7,7,0,0,0,1089.68,1087.09Z",
                transform: "translate(0 -1040.64)"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("section", {
        staticClass: "w-full min-h-500 bg-grey-lighter relative"
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container mx-auto px-8" }, [
      _c("div", { staticClass: "w-full max-w-md" }, [
        _c(
          "h1",
          { staticClass: "text-5xl hero-title text-white font-black mb-8" },
          [_vm._v("Unleash Your Potential")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "cursor-pointer inline-block text-sm font-semibold px-8 py-3 leading-normal bg-white text-red hover:bg-white uppercase"
          },
          [_vm._v("Get Coaching")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "w-full py-12" }, [
      _c(
        "h2",
        {
          staticClass:
            "text-3xl text-red font-thin text-center max-w-sm mx-auto"
        },
        [_vm._v("Everything you need to succeed.")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "w-full pb-20 pt-6" }, [
      _c(
        "div",
        {
          staticClass: "container flex mx-auto flex-wrap-reverse items-center"
        },
        [
          _c(
            "div",
            { staticClass: "w-full md:w-1/2 py-10 pr-8 pl-8 md:pl-8 lg:pl-24" },
            [
              _c("ul", { staticClass: "list-reset" }, [
                _c(
                  "li",
                  {
                    staticClass:
                      "text-base mb-6 flex items-start leading-normal"
                  },
                  [
                    _c("span", { staticClass: "w-16 h-16 block mr-4" }, [
                      _c("img", {
                        attrs: {
                          src: "/images/dumbbell.svg",
                          alt: "Dumbbell Icon"
                        }
                      })
                    ]),
                    _vm._v(
                      "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "text-base mb-6 flex items-start leading-normal"
                  },
                  [
                    _c("span", { staticClass: "w-16 h-16 block mr-4" }, [
                      _c("img", {
                        attrs: {
                          src: "/images/dumbbell.svg",
                          alt: "Dumbbell Icon"
                        }
                      })
                    ]),
                    _vm._v(
                      "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "text-base mb-6 flex items-start leading-normal"
                  },
                  [
                    _c("span", { staticClass: "w-16 h-16 block mr-4" }, [
                      _c("img", {
                        attrs: {
                          src: "/images/dumbbell.svg",
                          alt: "Dumbbell Icon"
                        }
                      })
                    ]),
                    _vm._v(
                      "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass:
                      "text-base mb-6 flex items-start leading-normal"
                  },
                  [
                    _c("span", { staticClass: "w-16 h-16 block mr-4" }, [
                      _c("img", {
                        attrs: {
                          src: "/images/dumbbell.svg",
                          alt: "Dumbbell Icon"
                        }
                      })
                    ]),
                    _vm._v(
                      "\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum natus molestias eligendi asperiores porro laborum,\n          "
                    )
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-full md:w-1/2 phone-image-container" }, [
            _c("div", { staticClass: "w-full phone-image" })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "bg-grey-gradient w-full py-20" }, [
      _c("div", { staticClass: "container mx-auto px-8" }, [
        _c(
          "h2",
          {
            staticClass:
              "text-3xl text-white font-thin mb-12 max-w-xs mx-auto text-center"
          },
          [_vm._v("Signup now for a free consultation.")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex w-full max-w-sm mx-auto" }, [
          _c("input", {
            staticClass:
              "px-4 flex-1 rounded-l-full focus:outline-none shadow-lg",
            attrs: { type: "text", placeholder: "Enter your email address" }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "bg-red py-4 px-8 text-white rounded-r-full uppercase shadow-lg focus:outline-none"
            },
            [_vm._v("Signup")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "py-20 mx-auto px-8" }, [
      _c(
        "div",
        { staticClass: "z-10 relative flex justify-center flex-wrap" },
        [
          _c(
            "div",
            {
              staticClass:
                "bg-white rounded-lg shadow-lg p-8 mx-2 w-full sm:w-auto mb-8"
            },
            [
              _c("div", {
                staticClass: "bg-grey-dark w-12 h-12 rounded-full mb-8"
              }),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-xl text-grey-darkest font-light mb-2" },
                [_vm._v("Online Programming")]
              ),
              _vm._v(" "),
              _c(
                "h6",
                { staticClass: "text-sm text-grey-darker font-thin mb-8" },
                [_vm._v("Individualized programming routine")]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "list-reset mb-12" }, [
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-start justify-center" }, [
                _c("span", { staticClass: "text-3xl text-blue font-medium" }, [
                  _vm._v("$50.00")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "align-text-top text-blue text-sm leading-normal"
                  },
                  [_vm._v("/Month")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "bg-white rounded shadow-lg p-8 mx-2 w-full sm:w-auto mb-8"
            },
            [
              _c("div", {
                staticClass: "bg-grey-dark w-12 h-12 rounded-full mb-8"
              }),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-xl text-grey-darkest font-light mb-2" },
                [_vm._v("Individual Training")]
              ),
              _vm._v(" "),
              _c(
                "h6",
                { staticClass: "text-sm text-grey-darker font-thin mb-8" },
                [_vm._v("One on one training sessions")]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "list-reset mb-12" }, [
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "text-sm text-grey-darker font-thin mb-4" },
                  [_vm._v("Lorem ipsum dolor sit amet consectetur")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-start justify-center" }, [
                _c("span", { staticClass: "text-3xl text-blue font-medium" }, [
                  _vm._v("$100.00")
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass:
                      "align-text-top text-blue text-sm leading-normal"
                  },
                  [_vm._v("/Month")]
                )
              ])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "h-screen w-full flex items-start justify-center pt-32" },
    [
      _c(
        "div",
        {
          staticClass: "bg-white max-w-sm shadow-lg rounded-lg overflow-hidden"
        },
        [
          _c("div", { staticClass: "sm:flex sm:items-center p-8" }, [
            _c(
              "div",
              { staticClass: "text-center sm:text-left sm:flex-grow" },
              [
                _c(
                  "p",
                  { staticClass: "text-xl text-center text-grey-darkest mb-8" },
                  [_vm._v("Welcome Back!")]
                ),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.login($event)
                      }
                    }
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.username,
                          expression: "username"
                        }
                      ],
                      staticClass:
                        "appearance-none border-b w-full py-2 mb-8 text-grey-darker leading-tight focus:outline-none",
                      attrs: {
                        id: "email",
                        type: "email",
                        placeholder: "Email"
                      },
                      domProps: { value: _vm.username },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.username = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass:
                        "appearance-none border-b w-full py-2 mb-12 text-grey-darker leading-tight focus:outline-none",
                      attrs: {
                        id: "password",
                        type: "password",
                        placeholder: "Password"
                      },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-xs font-semibold rounded-full py-2 leading-normal bg-white border border-red text-red hover:bg-red hover:text-white w-full uppercase",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Login")]
                    )
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.block.name,
                    subheading: _vm
                      .$moment(_vm.block.start_date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name,
                    loading: _vm.loading,
                    action: {
                      text: "Duplicate",
                      name: "duplicate-block",
                      params: {
                        user_id: _vm.$route.params.user_id,
                        block_id: _vm.block.id
                      }
                    },
                    deleteBlock: {
                      url:
                        "/trainer/users/" +
                        _vm.$route.params.user_id +
                        "/blocks/" +
                        _vm.$route.params.block_id,
                      redirect: {
                        name: "user",
                        params: { id: _vm.$route.params.user_id }
                      }
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "z-10 w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer",
                    on: { click: _vm.toggleModal }
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "fill-current text-white",
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showCreateWorkoutform,
                        expression: "showCreateWorkoutform"
                      }
                    ],
                    staticClass: "container mx-auto px-8 py-20"
                  },
                  [
                    _c("create-workout-form", {
                      on: {
                        "close-workout-create": _vm.toggleModal,
                        "create-workout-success": _vm.refreshData
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.showCreateWorkoutform,
                        expression: "!showCreateWorkoutform"
                      }
                    ],
                    staticClass: "container mx-auto px-4 py-20"
                  },
                  [
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-grey-darkest font-normal text-2xl mb-10 px-4"
                      },
                      [_vm._v("Workouts")]
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "list-reset flex flex-wrap px-4 md:px-0" },
                      _vm._l(_vm.workouts, function(workout) {
                        return _c("workout-item", {
                          key: workout.id,
                          attrs: {
                            workout: workout,
                            userId: _vm.userId,
                            blockId: _vm.block.id
                          }
                        })
                      }),
                      1
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.block.name,
                    subheading: _vm
                      .$moment(_vm.block.start_date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "container mx-auto px-8 py-20 relative" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-8 h-8 p-2 flex absolute pin-r pin-t border border-grey-dark justify-center items-center rounded-full mr-4 mt-4 cursor-pointer",
                        on: { click: _vm.closeWindow }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "fill-current text-grey-dark",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-grey-darkest font-normal text-2xl mb-10"
                      },
                      [_vm._v("Duplicate Workout")]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "max-w-md",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "mb-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block text-grey-darker text-sm font-normal mb-4",
                              attrs: { for: "sets" }
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass:
                              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
                            attrs: { id: "name", type: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block text-grey-darker text-sm font-normal mb-4",
                              attrs: { for: "sets" }
                            },
                            [_vm._v("Start Date")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.start_date,
                                expression: "start_date"
                              }
                            ],
                            staticClass:
                              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
                            attrs: { id: "start_date", type: "date" },
                            domProps: { value: _vm.start_date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.start_date = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase mt-12",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Duplicate")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                            attrs: { type: "button" },
                            on: { click: _vm.closeWindow }
                          },
                          [_vm._v("Cancel")]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.workout.name,
                    subheading: _vm
                      .$moment(_vm.workout.date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "container mx-auto px-8 py-20 relative" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "w-8 h-8 p-2 flex absolute pin-r pin-t border border-grey-dark justify-center items-center rounded-full mr-4 mt-4 cursor-pointer",
                        on: { click: _vm.closeWindow }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "fill-current text-grey-dark",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M19.293 3.293L12 10.586 4.707 3.293 3.293 4.707 10.586 12 3.293 19.293 4.707 20.707 12 13.414 19.293 20.707 20.707 19.293 13.414 12 20.707 4.707z"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-grey-darkest font-normal text-2xl mb-10"
                      },
                      [_vm._v("Duplicate Workout")]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        staticClass: "max-w-md",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.submit($event)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "mb-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block text-grey-darker text-sm font-normal mb-4",
                              attrs: { for: "sets" }
                            },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass:
                              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
                            attrs: { id: "name", type: "name" },
                            domProps: { value: _vm.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mb-6" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block text-grey-darker text-sm font-normal mb-4",
                              attrs: { for: "sets" }
                            },
                            [_vm._v("Date")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.date,
                                expression: "date"
                              }
                            ],
                            staticClass:
                              "appearance-none border-b w-full py-2 text-grey-darker leading-tight focus:outline-none",
                            attrs: { id: "date", type: "date" },
                            domProps: { value: _vm.date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.date = $event.target.value
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase mt-12",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Duplicate")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "text-grey-darker font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                            attrs: { type: "button" },
                            on: { click: _vm.closeWindow }
                          },
                          [_vm._v("Cancel")]
                        )
                      ]
                    )
                  ]
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.block.name,
                    subheading: _vm
                      .$moment(_vm.block.start_date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "container mx-auto px-4 py-20 relative" },
                  [_c("edit-set-form")],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("create-exercise-form", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.showModal,
            expression: "showModal"
          }
        ],
        on: {
          "close-exercise-create": _vm.toggleModal,
          "create-exercise-success": _vm.refreshData
        }
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          !_vm.loading && !_vm.showModal
            ? _c("exercise-list", {
                attrs: {
                  heading: "Exercises",
                  exercises: _vm.exercises,
                  categories: _vm.categories
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "cursor-pointer fixed pin-b pin-r w-12 h-12 bg-red hover:bg-red-dark shadow-lg rounded-full mr-8 mb-8 flex items-center justify-center",
          on: { click: _vm.toggleModal }
        },
        [
          _c(
            "svg",
            {
              staticClass: "fill-current text-white",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"
                }
              })
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "div",
              { staticClass: "container mx-auto px-0" },
              [
                _c(
                  "h1",
                  {
                    staticClass:
                      "text-grey-darkest font-normal text-2xl mb-4 px-8 pt-20"
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.user.first_name + " " + _vm.user.last_name)
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass:
                      "text-white font-normal text-xs font-bold mb-12 uppercase inline-block py-1 px-4 ml-8 bg-red border border-red-dark rounded-full",
                    class: {
                      "bg-green": _vm.isActive,
                      "border-green-dark": _vm.isActive
                    }
                  },
                  [
                    _vm._v(
                      _vm._s(_vm.user.is_active === 1 ? "Active" : "Inactive")
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "tabs",
                  { staticClass: "flex-1" },
                  [
                    _c(
                      "tab",
                      { attrs: { name: "Workouts", selected: true } },
                      [
                        _c("create-block-form", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showAddBlockForm,
                              expression: "showAddBlockForm"
                            }
                          ],
                          on: {
                            "cancel-block-create": _vm.toggleAddBlockForm,
                            "create-block-success": _vm.refreshData
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.showAddBlockForm,
                                expression: "!showAddBlockForm"
                              }
                            ]
                          },
                          [
                            _c(
                              "h1",
                              {
                                staticClass:
                                  "text-grey-darkest font-normal text-2xl mb-8 px-8"
                              },
                              [
                                _vm._v(
                                  "\n              Training Blocks\n              "
                                ),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "float-right uppercase text-grey-dark text-xs font-semibold py-2 px-4 rounded hover:bg-grey-lighter hover:text-red cursor-pointer",
                                    on: { click: _vm.toggleAddBlockForm }
                                  },
                                  [_vm._v("Add Block")]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "flex w-full flex-wrap px-6" },
                              _vm._l(_vm.blocks, function(block) {
                                return _c("workout-card", {
                                  key: block.id,
                                  attrs: {
                                    name: block.name,
                                    type: block.type.name,
                                    date: _vm
                                      .$moment(block.start_date)
                                      .format("MMMM Do YYYY"),
                                    linkparams: {
                                      name: "block",
                                      params: {
                                        user_id: _vm.$route.params.id,
                                        block_id: block.id
                                      }
                                    },
                                    shadow: "true"
                                  }
                                })
                              }),
                              1
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("tab", { attrs: { name: "Profile" } })
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "relative mb-20" },
        [
          _c("create-user-form", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showModal,
                expression: "showModal"
              }
            ],
            on: {
              "close-user-create": _vm.toggleModal,
              "create-user-success": _vm.refreshData
            }
          }),
          _vm._v(" "),
          _c(
            "transition",
            { attrs: { name: "fade" } },
            [
              !_vm.loading && !_vm.showModal
                ? _c("user-list", {
                    attrs: {
                      heading: "Users",
                      users: _vm.users,
                      show: _vm.showModal,
                      expiring: _vm.expiring
                    }
                  })
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      !_vm.showModal
        ? _c(
            "div",
            {
              staticClass:
                "cursor-pointer fixed pin-b pin-r w-12 h-12 bg-red hover:bg-red-dark shadow-lg rounded-full mr-8 mb-8 flex items-center justify-center",
              on: { click: _vm.toggleModal }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current text-white",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"
                    }
                  })
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("side-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.workout.name,
                    subheading: _vm
                      .$moment(_vm.workout.date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name,
                    action: {
                      text: "Duplicate",
                      name: "duplicate-workout",
                      params: {
                        user_id: _vm.$route.params.user_id,
                        workout_id: _vm.workout.id
                      }
                    },
                    deleteBlock: {
                      url:
                        "/trainer/users/" +
                        _vm.$route.params.user_id +
                        "/workouts/" +
                        _vm.$route.params.workout_id,
                      redirect: {
                        name: "block",
                        params: { id: _vm.$route.params.block_id }
                      }
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.showModal
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "z-10 w-12 h-12 bg-red shadow-lg rounded-full fixed pin-r pin-b mr-8 mb-8 flex items-center justify-center cursor-pointer",
                        on: { click: _vm.toggleModal }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "fill-current text-white",
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M11 3L11 11 3 11 3 13 11 13 11 21 13 21 13 13 21 13 21 11 13 11 13 3z"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "container mx-auto px-4 py-20 relative" },
                  [
                    _c("create-set-form", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showModal,
                          expression: "showModal"
                        }
                      ],
                      on: {
                        "close-set-create": _vm.toggleModal,
                        "create-set-success": _vm.refreshData
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showModal,
                            expression: "!showModal"
                          }
                        ]
                      },
                      [
                        _c(
                          "h1",
                          {
                            staticClass:
                              "text-grey-darkest font-normal text-2xl mb-10 px-4"
                          },
                          [_vm._v("Exercises")]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass:
                              "list-reset flex flex-wrap px-4 md:px-0"
                          },
                          _vm._l(_vm.sets, function(set) {
                            return _c(
                              "li",
                              {
                                key: set.id,
                                staticClass: "w-full md:w-1/2 lg:w-1/3 mb-4"
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "cursor-pointer",
                                    attrs: {
                                      "active-class": "none",
                                      to: {
                                        name: "edit-set",
                                        params: {
                                          user_id: _vm.$route.params.user_id,
                                          block_id: _vm.$route.params.block_id,
                                          workout_id:
                                            _vm.$route.params.workout_id,
                                          set_id: set.set.id
                                        }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "w-full flex justify-between items-start relative"
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "flex-1" },
                                              [
                                                _vm._l(set.exercises, function(
                                                  exercise
                                                ) {
                                                  return _c(
                                                    "h2",
                                                    {
                                                      key: exercise.id,
                                                      staticClass:
                                                        "text-lg text-grey-darkest font-bold mb-1"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(exercise.name)
                                                      )
                                                    ]
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "h3",
                                                  {
                                                    staticClass:
                                                      "text-base text-blue font-medium"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Sets: " +
                                                        _vm._s(set.set.num_sets)
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "text-base text-grey-dark font-base text-sm mt-4"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(set.set.notes)
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("navigation"), _vm._v(" "), _c("div", { staticClass: "mb-12" })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "w-full bg-grey-lighter border-b border-grey-light py-8"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "container mx-auto px-8 flex justify-between flex-wrap"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-column md:flex-row justify-center md:items-center flex-wrap md:flex-no-wrap w-full md:w-auto"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex flex-col w-full md:w-auto" }, [
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-grey-darkest text-xl mb-2 text-center md:text-left"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            this.user.first_name + " " + this.user.last_name
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h3",
                      {
                        staticClass:
                          "text-sm font-medium uppercase mb-4 text-center md:text-left",
                        class: {
                          "text-green": _vm.isActive,
                          "text-red": !_vm.isActive
                        }
                      },
                      [_vm._v(_vm._s(this.isActive ? "Active" : "Inactive"))]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mx-auto mb-12 md:mb-0 md:mx-0" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass:
                              "cursor-pointer text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-grey-lighter border border-red text-red hover:bg-red hover:text-white uppercase focus:outline-none",
                            attrs: { to: "/u/profile" }
                          },
                          [_vm._v("Edit Profile")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex justify-center md:justify-start w-full md:w-auto"
                },
                [
                  _c("goal-card", {
                    attrs: {
                      loading: _vm.loading,
                      icon: "/images/weight.svg",
                      count: _vm.numWorkouts,
                      text: "Total Workouts"
                    }
                  }),
                  _vm._v(" "),
                  _c("goal-card", {
                    attrs: {
                      loading: _vm.loading,
                      icon: "/images/award.svg",
                      count: 3,
                      text: "Goals In Progress"
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "div",
              [
                _vm.isTrainer ? _c("announcement") : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "container mx-auto mt-20" }, [
                  _c("main", [
                    _c("section", { staticClass: "px-6" }, [
                      _c(
                        "h2",
                        {
                          staticClass:
                            "text-grey-darkest text-center font-normal text-2xl px-2 mb-1"
                        },
                        [_vm._v("Week Ahead")]
                      ),
                      _vm._v(" "),
                      _c(
                        "h2",
                        {
                          staticClass:
                            "text-grey-darkest text-center font-normal text-base mb-12 px-8"
                        },
                        [_vm._v("Upcoming workouts over the next three days.")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-full flex flex-wrap mb-20" },
                        _vm._l(_vm.weekAhead, function(workout) {
                          return _c("workout-card", {
                            key: workout.id,
                            attrs: {
                              name: workout.name,
                              type: workout.block.type.name,
                              date: _vm.$moment(workout.date).format("dddd"),
                              linkparams: {
                                name: "user-workout",
                                params: { id: workout.id }
                              }
                            }
                          })
                        }),
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "h2",
                      {
                        staticClass:
                          "text-grey-darkest text-center font-normal text-2xl mb-2 px-8"
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$moment(new Date()).format("dddd MMM Do"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "h2",
                      {
                        staticClass:
                          "text-center text-grey-darkest font-normal text-base mb-12 px-8"
                      },
                      [
                        _vm._v(
                          _vm._s(
                            _vm.todaysWorkout.name
                              ? _vm.todaysWorkout.name
                              : "No workout today"
                          )
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("section", { staticClass: "px-4" }, [
                      !!_vm.sets.length
                        ? _c(
                            "ul",
                            {
                              staticClass:
                                "list-reset flex flex-wrap px-4 md:px-0"
                            },
                            _vm._l(_vm.sets, function(set, index) {
                              return _c(
                                "li",
                                {
                                  key: set.id,
                                  staticClass: "w-full md:w-1/2 lg:w-1/3 mb-4"
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-full flex justify-between items-start relative"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "flex-1" },
                                            [
                                              set.exercises.length > 1
                                                ? _c(
                                                    "div",
                                                    { staticClass: "mb-10" },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "bg-green py-1 px-4 rounded-full border border-green-dark text-white uppercase font-medium text-xs"
                                                        },
                                                        [_vm._v("Superset")]
                                                      )
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm._l(set.exercises, function(
                                                exercise
                                              ) {
                                                return _c(
                                                  "h2",
                                                  {
                                                    key: exercise.id,
                                                    staticClass:
                                                      "text-lg text-grey-darkest font-bold mb-1"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(exercise.name)
                                                    )
                                                  ]
                                                )
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "h3",
                                                {
                                                  staticClass:
                                                    "text-base text-blue font-medium"
                                                },
                                                [
                                                  _vm._v(
                                                    "Sets: " +
                                                      _vm._s(set.num_sets)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                {
                                                  staticClass:
                                                    "text-base text-grey-dark font-base text-sm mt-4"
                                                },
                                                [_vm._v(_vm._s(set.notes))]
                                              )
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "bg-grey-dark rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                                              },
                                              [_vm._v(_vm._s(index + 1))]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.sets.length
                        ? _c(
                            "div",
                            { staticClass: "w-full p-10 text-center" },
                            [
                              _c("div", { staticClass: "w-full" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "container mx-auto px-8 flex flex-col items-center"
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "w-32 h-32 opacity-75",
                                      attrs: {
                                        src: "/images/empty_weight_icon.svg",
                                        alt: "Empty"
                                      }
                                    })
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c("footer", { staticClass: "h-64" })
                ])
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-8 md:mb-0 md:mr-8" }, [
      _c("div", { staticClass: "rounded-full bg-grey p-2" }, [
        _c("div", { staticClass: "rounded-full p-1 bg-grey-lighter" }, [
          _c("img", {
            staticClass: "avatar block",
            attrs: { src: "/images/bxs-user-circle.svg", alt: "Profile" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-grey-lighter py-10 border-b border-grey-light" },
        [
          _c(
            "div",
            { staticClass: "container mx-auto px-8 text-grey-darkest" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex items-center justify-center md:justify-start flex-wrap"
                },
                [
                  _c("div", { staticClass: "mb-8 md:mb-0 md:mr-8" }, [
                    _c("div", { staticClass: "rounded-full bg-grey p-2" }, [
                      _c(
                        "div",
                        { staticClass: "rounded-full p-1 bg-grey-lighter" },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "profile-icon text-grey-light fill-current",
                              attrs: {
                                x: "0px",
                                y: "0px",
                                viewBox: "0 0 24 24"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M0.39,15.93l2.4,4.16c0.33,0.57,1.07,0.77,1.64,0.44l1.68-0.97c0.7,0.55,1.47,1,2.28,1.34v1.92c0,0.66,0.54,1.2,1.2,1.2\n\th4.81c0.66,0,1.2-0.54,1.2-1.2V20.9c0.81-0.34,1.58-0.79,2.28-1.34l1.68,0.97c0.57,0.33,1.31,0.13,1.64-0.44l2.4-4.16\n\tc0.33-0.57,0.13-1.31-0.44-1.64l-1.65-0.95c0.06-0.44,0.09-0.89,0.09-1.34c0-0.45-0.03-0.89-0.1-1.34l1.65-0.95\n\tc0.57-0.33,0.77-1.07,0.44-1.64l-2.4-4.16c-0.33-0.57-1.07-0.77-1.64-0.44l-1.68,0.97c-0.7-0.55-1.47-1-2.28-1.34V1.18\n\tc0-0.66-0.54-1.2-1.2-1.2H9.59c-0.66,0-1.2,0.54-1.2,1.2V3.1C7.58,3.44,6.81,3.89,6.11,4.44L4.44,3.47\n\tC3.86,3.13,3.13,3.33,2.79,3.91l-2.4,4.16C0.06,8.64,0.26,9.38,0.83,9.71l1.65,0.95c-0.06,0.44-0.1,0.89-0.1,1.34\n\tc0,0.45,0.03,0.89,0.1,1.34l-1.65,0.95C0.26,14.62,0.06,15.36,0.39,15.93z M12,7.19c2.65,0,4.81,2.16,4.81,4.81\n\ts-2.16,4.81-4.81,4.81S7.19,14.65,7.19,12S9.35,7.19,12,7.19z"
                                }
                              })
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full md:w-auto" }, [
                    _c("h1", {
                      staticClass: "text-center md:text-left text-xl mb-2",
                      domProps: { textContent: _vm._s(_vm.fullName) }
                    }),
                    _vm._v(" "),
                    _c(
                      "h1",
                      {
                        staticClass:
                          "text-center md:text-left text-base font-medium text-grey-darker uppercase"
                      },
                      [_vm._v("Settings")]
                    )
                  ])
                ]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("main", { staticClass: "py-20" }, [
        _c(
          "section",
          { staticClass: "container mx-auto px-4" },
          [
            _c(
              "tabs",
              { staticClass: "flex-1" },
              [
                _c("tab", { attrs: { name: "Account", selected: true } }, [
                  _c(
                    "div",
                    { staticClass: "flex items-center mb-20 px-8 flex-wrap" },
                    [
                      _c(
                        "h1",
                        {
                          staticClass:
                            "text-grey-darkest font-normal text-2xl mr-8 mb-4 md:mb-0"
                        },
                        [_vm._v("Update Account Information")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "block text-xs font-medium uppercase text-white py-2 px-4 rounded-full",
                          class: {
                            "bg-blue": _vm.isActive,
                            "bg-grey": !_vm.isActive
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              this.isActive
                                ? "Account Active"
                                : "Account Inactive"
                            )
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticClass: "max-w-md px-8 relative",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        },
                        keydown: function($event) {
                          return _vm.form.errors.clear($event.target.name)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "mb-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block text-grey-darker text-sm font-normal mb-4",
                            attrs: { for: "firstname" }
                          },
                          [_vm._v("First Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.first_name,
                              expression: "form.first_name"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
                          attrs: {
                            id: "firstname",
                            type: "text",
                            name: "first_name"
                          },
                          domProps: { value: _vm.form.first_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "first_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("first_name")
                          ? _c("span", {
                              staticClass: "text-red text-xs pt-2",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.form.errors.get("last_name")
                                )
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block text-grey-darker text-sm font-normal mb-4",
                            attrs: { for: "lastname" }
                          },
                          [_vm._v("Last Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.last_name,
                              expression: "form.last_name"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
                          attrs: {
                            id: "lastname",
                            type: "text",
                            name: "last_name"
                          },
                          domProps: { value: _vm.form.last_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "last_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("last_name")
                          ? _c("span", {
                              staticClass: "text-red text-xs pt-2",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.form.errors.get("last_name")
                                )
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block text-grey-darker text-sm font-normal mb-4",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
                          attrs: { id: "email", type: "email", name: "email" },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("email")
                          ? _c("span", {
                              staticClass: "text-red text-xs pt-2",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.form.errors.get("email")
                                )
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-6" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block text-grey-darker text-sm font-normal mb-4",
                            attrs: { for: "password" }
                          },
                          [_vm._v("Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
                          attrs: { id: "password", type: "password" },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("password")
                          ? _c("span", {
                              staticClass: "text-red text-xs pt-2",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.form.errors.get("password")
                                )
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mb-12" }, [
                        _c(
                          "label",
                          {
                            staticClass:
                              "block text-grey-darker text-sm font-normal mb-4",
                            attrs: { for: "confirmpassword" }
                          },
                          [_vm._v("Confirm Password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          staticClass:
                            "appearance-none border-b w-full py-2 mb-2 text-grey-darker leading-tight focus:outline-none",
                          attrs: {
                            id: "confirmpassword",
                            type: "password",
                            name: "password_confirmation"
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.form.errors.has("password")
                          ? _c("span", {
                              staticClass: "text-red text-xs pt-2",
                              domProps: {
                                textContent: _vm._s(
                                  _vm.form.errors.get("password")
                                )
                              }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "mr-4 bg-blue hover:bg-blue-dark text-white font-normal text-sm py-2 px-6 rounded-full focus:outline-none uppercase",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update Profile")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("tab", { attrs: { name: "Plan" } })
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("sub-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading
          ? _c(
              "section",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.block.name,
                    subheading: _vm
                      .$moment(_vm.block.start_date)
                      .format("MMMM Do YYYY"),
                    type: _vm.type.name,
                    loading: _vm.loading
                  }
                }),
                _vm._v(" "),
                _vm._l(_vm.weeks, function(week, index) {
                  return _c(
                    "div",
                    { key: index, staticClass: "container mx-auto px-4 pt-20" },
                    [
                      week.length
                        ? _c(
                            "h1",
                            {
                              staticClass:
                                "text-grey-darkest font-normal text-2xl mb-10 px-4"
                            },
                            [_vm._v("Week " + _vm._s(index + 1))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      week.length
                        ? _c(
                            "ul",
                            {
                              staticClass:
                                "list-reset flex flex-wrap px-4 md:px-0"
                            },
                            _vm._l(week, function(workout) {
                              return _c(
                                "li",
                                {
                                  key: workout.id,
                                  staticClass: "workout-item mb-4"
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "block",
                                      attrs: {
                                        "active-class": "none",
                                        to: {
                                          name: "user-workout",
                                          params: { id: workout.id }
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-start"
                                        },
                                        [
                                          _c("div", { staticClass: "pr-2" }, [
                                            _c(
                                              "h1",
                                              {
                                                staticClass:
                                                  "text-xl font-bold text-grey-darkest mb-2"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm
                                                      .$moment(workout.date)
                                                      .format("dddd")
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "h2",
                                              {
                                                staticClass:
                                                  "text-lg text-grey-dark font-normal"
                                              },
                                              [_vm._v(_vm._s(workout.name))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c(
                                              "h3",
                                              {
                                                staticClass:
                                                  "text-base text-blue text-3xl font-medium text-right"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm
                                                      .$moment(workout.date)
                                                      .format("DD")
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "h4",
                                              {
                                                staticClass:
                                                  "font-medium text-blue uppercase text-right"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm
                                                      .$moment(workout.date)
                                                      .format("MMM")
                                                  )
                                                )
                                              ]
                                            )
                                          ])
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          )
                        : _vm._e()
                    ]
                  )
                })
              ],
              2
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("sub-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading && !_vm.blocks.length
          ? _c("div", [
              _c("div", { staticClass: "w-full py-20" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "container mx-auto px-8 flex flex-col items-center"
                  },
                  [
                    _c("img", {
                      staticClass: "w-32 h-32 opacity-75",
                      attrs: {
                        src: "/images/empty_weight_icon.svg",
                        alt: "Empty"
                      }
                    })
                  ]
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading && _vm.blocks.length
          ? _c("div", { staticClass: "container mx-auto px-0 pb-20" }, [
              _c("div", { staticClass: "flex-1" }, [
                _c(
                  "h1",
                  {
                    staticClass:
                      "text-grey-darkest font-normal text-2xl mb-8 px-8 pt-20"
                  },
                  [_vm._v("Training Blocks")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex w-full flex-wrap px-6" },
                  _vm._l(_vm.blocks, function(block) {
                    return _c("workout-card", {
                      key: block.id,
                      attrs: {
                        name: block.name,
                        type: block.type.name,
                        date: _vm
                          .$moment(block.start_date)
                          .format("MMMM Do YYYY"),
                        linkparams: {
                          name: "user-workouts-block",
                          params: { id: block.id }
                        }
                      }
                    })
                  }),
                  1
                )
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("sub-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading && !_vm.workouts.length
          ? _c("div", [
              _c("div", { staticClass: "w-full py-20" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "container mx-auto px-8 flex flex-col items-center"
                  },
                  [
                    _c("img", {
                      staticClass: "w-32 h-32 opacity-75",
                      attrs: {
                        src: "/images/empty_weight_icon.svg",
                        alt: "Empty"
                      }
                    })
                  ]
                )
              ])
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        !_vm.loading && _vm.workouts.length
          ? _c(
              "div",
              [
                _c("block-header", {
                  attrs: {
                    heading: _vm.firstBlock.name,
                    subheading: _vm
                      .$moment(_vm.weekStart.start_date)
                      .format("MMMM Do YYYY"),
                    type: _vm.typeName,
                    loading: _vm.loading
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "container mx-auto px-4 pb-20" }, [
                  _c(
                    "h1",
                    {
                      staticClass:
                        "text-grey-darkest font-normal text-2xl mb-12 px-4 pt-20"
                    },
                    [_vm._v("This Week")]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    { staticClass: "list-reset flex flex-wrap px-4 md:px-0" },
                    _vm._l(_vm.workouts, function(workout) {
                      return _c(
                        "li",
                        {
                          key: workout.id,
                          staticClass: "w-full md:w-1/2 lg:w-1/3 mb-4"
                        },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                "active-class": "none",
                                to: {
                                  name: "user-workout",
                                  params: { id: workout.id }
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between items-start"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex items-center" },
                                    [
                                      _c("div", [
                                        _c(
                                          "h2",
                                          {
                                            staticClass:
                                              "text-lg text-grey-darkest font-bold mb-1"
                                          },
                                          [_vm._v(_vm._s(workout.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "h3",
                                          {
                                            staticClass:
                                              "text-base text-blue font-medium"
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm
                                                  .$moment(workout.date)
                                                  .format("dddd, MMM Do")
                                              )
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c("div", [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "fill-current",
                                          class: {
                                            "text-green": _vm.isPastDate(
                                              workout.date
                                            ),
                                            "text-grey-dark": !_vm.isPastDate(
                                              workout.date
                                            )
                                          },
                                          attrs: {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 34 34"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M16.9999 31.1667C9.17588 31.1667 2.83325 24.824 2.83325 17C2.83325 9.17598 9.17588 2.83334 16.9999 2.83334C24.824 2.83334 31.1666 9.17598 31.1666 17C31.1666 24.824 24.824 31.1667 16.9999 31.1667ZM11.3333 14.1667L8.49992 17L15.5833 24.0833L25.4999 14.1667L22.6666 11.3333L15.5833 18.4167L11.3333 14.1667Z"
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    0
                  )
                ])
              ],
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navigation"),
      _vm._v(" "),
      _c("sub-navigation"),
      _vm._v(" "),
      _vm.loading ? _c("loader") : _vm._e(),
      _vm._v(" "),
      !_vm.loading
        ? _c(
            "div",
            [
              _c("block-header", {
                attrs: {
                  heading: _vm.workout.name,
                  subheading: _vm
                    .$moment(_vm.workout.date)
                    .format("MMMM Do YYYY"),
                  type: _vm.workout.block.type.name,
                  loading: _vm.loading
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "container mx-auto px-4 py-20 relative" },
                [
                  _c(
                    "ul",
                    { staticClass: "list-reset flex flex-wrap px-4 md:px-0" },
                    _vm._l(_vm.sets, function(set, index) {
                      return _c(
                        "li",
                        {
                          key: set.id,
                          staticClass: "w-full md:w-1/2 lg:w-1/3 mb-4"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "relative w-full bg-white shadow-lg md:shadow-none md:hover:bg-grey-lighter rounded-lg p-4 flex justify-between"
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "w-full flex justify-between items-start relative"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex-1" },
                                    [
                                      set.exercises.length > 1
                                        ? _c("div", { staticClass: "mb-10" }, [
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "bg-green inline-block py-1 px-4 rounded-full border border-green-dark text-white uppercase font-medium text-xs"
                                              },
                                              [_vm._v("Superset")]
                                            )
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm._l(set.exercises, function(exercise) {
                                        return _c(
                                          "h2",
                                          {
                                            key: exercise.id,
                                            staticClass:
                                              "text-lg text-grey-darkest font-bold mb-1"
                                          },
                                          [_vm._v(_vm._s(exercise.name))]
                                        )
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "h3",
                                        {
                                          staticClass:
                                            "text-base text-blue font-medium"
                                        },
                                        [
                                          _vm._v(
                                            "Sets: " + _vm._s(set.num_sets)
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "text-base text-grey-dark font-base text-sm mt-4"
                                        },
                                        [_vm._v(_vm._s(set.notes))]
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "bg-grey-dark rounded-full w-6 h-6 flex items-center justify-center text-white text-xs"
                                      },
                                      [_vm._v(_vm._s(index + 1))]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var v_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-scroll-lock */ "./node_modules/v-scroll-lock/dist/v-scroll-lock.js");
/* harmony import */ var v_scroll_lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(v_scroll_lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Header */ "./resources/js/components/Header.vue");
/* harmony import */ var _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forms/LoginForm */ "./resources/js/components/forms/LoginForm.vue");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Navigation */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_SubNavigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/SubNavigation */ "./resources/js/components/SubNavigation.vue");
/* harmony import */ var _components_forms_CreateUserForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/forms/CreateUserForm */ "./resources/js/components/forms/CreateUserForm.vue");
/* harmony import */ var _components_forms_CreateExerciseForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/forms/CreateExerciseForm */ "./resources/js/components/forms/CreateExerciseForm.vue");
/* harmony import */ var _components_forms_CreateBlockForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/forms/CreateBlockForm */ "./resources/js/components/forms/CreateBlockForm.vue");
/* harmony import */ var _components_forms_CreateWorkoutForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/forms/CreateWorkoutForm */ "./resources/js/components/forms/CreateWorkoutForm.vue");
/* harmony import */ var _components_forms_DuplicateWorkoutForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forms/DuplicateWorkoutForm */ "./resources/js/components/forms/DuplicateWorkoutForm.vue");
/* harmony import */ var _components_forms_CreateSetForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/forms/CreateSetForm */ "./resources/js/components/forms/CreateSetForm.vue");
/* harmony import */ var _components_forms_EditSetForm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/forms/EditSetForm */ "./resources/js/components/forms/EditSetForm.vue");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/Tabs */ "./resources/js/components/Tabs.vue");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Tab */ "./resources/js/components/Tab.vue");
/* harmony import */ var _components_lists_UserList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/lists/UserList */ "./resources/js/components/lists/UserList.vue");
/* harmony import */ var _components_lists_ExerciseList__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/lists/ExerciseList */ "./resources/js/components/lists/ExerciseList.vue");
/* harmony import */ var _components_SideNavigation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/SideNavigation */ "./resources/js/components/SideNavigation.vue");
/* harmony import */ var _components_PageFooter__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/PageFooter */ "./resources/js/components/PageFooter.vue");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/Block */ "./resources/js/components/Block.vue");
/* harmony import */ var _components_BlockHeader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/BlockHeader */ "./resources/js/components/BlockHeader.vue");
/* harmony import */ var _components_WorkoutItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/WorkoutItem */ "./resources/js/components/WorkoutItem.vue");
/* harmony import */ var _components_WorkoutCard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/WorkoutCard */ "./resources/js/components/WorkoutCard.vue");
/* harmony import */ var _components_Snackbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/Snackbar */ "./resources/js/components/Snackbar.vue");
/* harmony import */ var _components_Instagram__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/Instagram */ "./resources/js/components/Instagram.vue");
/* harmony import */ var _components_Announcement__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/Announcement */ "./resources/js/components/Announcement.vue");
/* harmony import */ var _components_DeleteModal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/DeleteModal */ "./resources/js/components/DeleteModal.vue");
/* harmony import */ var _components_ContextMenu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/ContextMenu */ "./resources/js/components/ContextMenu.vue");
/* harmony import */ var _components_UserSkeletonLoader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/UserSkeletonLoader */ "./resources/js/components/UserSkeletonLoader.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_Construction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/Construction */ "./resources/js/components/Construction.vue");





































vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$store = _store__WEBPACK_IMPORTED_MODULE_6__["default"];
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$http = axios__WEBPACK_IMPORTED_MODULE_4___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$moment = moment__WEBPACK_IMPORTED_MODULE_5___default.a;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(v_scroll_lock__WEBPACK_IMPORTED_MODULE_2___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_cookies__WEBPACK_IMPORTED_MODULE_3___default.a);
vue_cookies__WEBPACK_IMPORTED_MODULE_3___default.a.config("7d");
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("page-header", _components_Header__WEBPACK_IMPORTED_MODULE_8__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("login-form", _components_forms_LoginForm__WEBPACK_IMPORTED_MODULE_9__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("navigation", _components_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("sub-navigation", _components_SubNavigation__WEBPACK_IMPORTED_MODULE_11__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("create-user-form", _components_forms_CreateUserForm__WEBPACK_IMPORTED_MODULE_12__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("create-exercise-form", _components_forms_CreateExerciseForm__WEBPACK_IMPORTED_MODULE_13__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("create-block-form", _components_forms_CreateBlockForm__WEBPACK_IMPORTED_MODULE_14__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("create-workout-form", _components_forms_CreateWorkoutForm__WEBPACK_IMPORTED_MODULE_15__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("create-set-form", _components_forms_CreateSetForm__WEBPACK_IMPORTED_MODULE_17__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("edit-set-form", _components_forms_EditSetForm__WEBPACK_IMPORTED_MODULE_18__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("duplicate-workout-form", _components_forms_DuplicateWorkoutForm__WEBPACK_IMPORTED_MODULE_16__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("tabs", _components_Tabs__WEBPACK_IMPORTED_MODULE_19__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("tab", _components_Tab__WEBPACK_IMPORTED_MODULE_20__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("user-list", _components_lists_UserList__WEBPACK_IMPORTED_MODULE_21__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("exercise-list", _components_lists_ExerciseList__WEBPACK_IMPORTED_MODULE_22__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("side-navigation", _components_SideNavigation__WEBPACK_IMPORTED_MODULE_23__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("page-footer", _components_PageFooter__WEBPACK_IMPORTED_MODULE_24__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("block", _components_Block__WEBPACK_IMPORTED_MODULE_25__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("block-header", _components_BlockHeader__WEBPACK_IMPORTED_MODULE_26__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("workout-item", _components_WorkoutItem__WEBPACK_IMPORTED_MODULE_27__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("workout-card", _components_WorkoutCard__WEBPACK_IMPORTED_MODULE_28__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("snackbar", _components_Snackbar__WEBPACK_IMPORTED_MODULE_29__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("instagram", _components_Instagram__WEBPACK_IMPORTED_MODULE_30__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("announcement", _components_Announcement__WEBPACK_IMPORTED_MODULE_31__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("delete-modal", _components_DeleteModal__WEBPACK_IMPORTED_MODULE_32__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("context-menu", _components_ContextMenu__WEBPACK_IMPORTED_MODULE_33__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("user-skeleton-loader", _components_UserSkeletonLoader__WEBPACK_IMPORTED_MODULE_34__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("loader", _components_Loader__WEBPACK_IMPORTED_MODULE_35__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component("construction", _components_Construction__WEBPACK_IMPORTED_MODULE_36__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"](_routes__WEBPACK_IMPORTED_MODULE_7__["default"]);
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].getters.authorized) {
      next({
        path: "/login",
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      if (to.matched.some(function (record) {
        return record.meta.is_admin;
      })) {
        if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].getters.isAdmin) {
          next();
        } else {
          next({
            name: "overview"
          });
        }
      } else if (to.matched.some(function (record) {
        return record.meta.is_trainer;
      })) {
        if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].getters.isTrainer || _store__WEBPACK_IMPORTED_MODULE_6__["default"].getters.isAdmin) {
          next();
        } else {
          next({
            name: "overview"
          });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(function (record) {
    return record.meta.guest;
  })) {
    if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].getters.authorized) {
      next({
        name: "overview"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
var handleOutsideClick;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive("closable", {
  bind: function bind(el, binding, vnode) {
    handleOutsideClick = function handleOutsideClick(e) {
      e.stopPropagation(); // Get the handler method name and the exclude array
      // from the object used in v-closable

      var _binding$value = binding.value,
          handler = _binding$value.handler,
          exclude = _binding$value.exclude; // This variable indicates if the clicked element is excluded

      var clickedOnExcludedEl = false;
      exclude.forEach(function (refName) {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          var excludedEl = vnode.context.$refs[refName]; // See if this excluded element
          // is the same element the user just clicked on

          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      }); // We check to see if the clicked element is not
      // the dialog element and not excluded

      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    }; // Register click/touchstart event listeners on the whole page


    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },
  unbind: function unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
});
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: "#app",
  router: router,
  created: function created() {
    var _this = this;

    if ($cookies.isKey("laravel_token")) {
      var laravelToken = $cookies.get("laravel_token");
      var token = "Bearer ".concat(laravelToken);
      this.$http.defaults.headers.common["Authorization"] = token;
      this.$http.get("".concat("http://localhost:8000/api", "/user")).then(function (res) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("role", JSON.stringify(res.data.role));
      })["catch"](function (err) {
        _this.$cookies.remove("laravel_token");
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/classes/Errors.js":
/*!****************************************!*\
  !*** ./resources/js/classes/Errors.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/classes/Form.js":
/*!**************************************!*\
  !*** ./resources/js/classes/Form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./resources/js/classes/Errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Form =
/*#__PURE__*/
function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = {};

      for (var property in this.originalData) {
        data[property] = this[property];
      }

      return data;
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }

      this.errors.clear();
    }
  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess();

          resolve(response.data);
        })["catch"](function (error) {
          _this.onFail(error.response.data.errors);

          reject(error.response.data.errors);
        });
      });
    }
  }, {
    key: "onSuccess",
    value: function onSuccess() {
      this.reset();
    }
  }, {
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/components/Announcement.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Announcement.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Announcement.vue?vue&type=template&id=4945c5b2& */ "./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2&");
/* harmony import */ var _Announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Announcement.vue?vue&type=script&lang=js& */ "./resources/js/components/Announcement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Announcement.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Announcement.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Announcement.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Announcement.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Announcement.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Announcement.vue?vue&type=template&id=4945c5b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Announcement.vue?vue&type=template&id=4945c5b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Announcement_vue_vue_type_template_id_4945c5b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Avatar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Avatar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar.vue?vue&type=template&id=62781b04&scoped=true& */ "./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true&");
/* harmony import */ var _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar.vue?vue&type=script&lang=js& */ "./resources/js/components/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& */ "./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62781b04",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Avatar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Avatar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=style&index=0&id=62781b04&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_style_index_0_id_62781b04_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Avatar.vue?vue&type=template&id=62781b04&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Avatar.vue?vue&type=template&id=62781b04&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Avatar_vue_vue_type_template_id_62781b04_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Block.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Block.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block.vue?vue&type=template&id=06572eb2& */ "./resources/js/components/Block.vue?vue&type=template&id=06572eb2&");
/* harmony import */ var _Block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block.vue?vue&type=script&lang=js& */ "./resources/js/components/Block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Block.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Block.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Block.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Block.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Block.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Block_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Block.vue?vue&type=template&id=06572eb2&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Block.vue?vue&type=template&id=06572eb2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Block.vue?vue&type=template&id=06572eb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Block.vue?vue&type=template&id=06572eb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Block_vue_vue_type_template_id_06572eb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/BlockHeader.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/BlockHeader.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockHeader.vue?vue&type=template&id=26f4e35f& */ "./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f&");
/* harmony import */ var _BlockHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/BlockHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockHeader.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlockHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BlockHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/BlockHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/BlockHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BlockHeader.vue?vue&type=template&id=26f4e35f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/BlockHeader.vue?vue&type=template&id=26f4e35f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockHeader_vue_vue_type_template_id_26f4e35f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Construction.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Construction.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Construction.vue?vue&type=template&id=1cf4b43c& */ "./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c&");
/* harmony import */ var _Construction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Construction.vue?vue&type=script&lang=js& */ "./resources/js/components/Construction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Construction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Construction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Construction.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Construction.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Construction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Construction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Construction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Construction.vue?vue&type=template&id=1cf4b43c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Construction.vue?vue&type=template&id=1cf4b43c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Construction_vue_vue_type_template_id_1cf4b43c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ContextMenu.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ContextMenu.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=3c1a78da& */ "./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContextMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ContextMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=template&id=3c1a78da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContextMenu.vue?vue&type=template&id=3c1a78da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_3c1a78da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DeleteModal.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteModal.vue?vue&type=template&id=cae0bcb2& */ "./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&");
/* harmony import */ var _DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteModal.vue?vue&type=script&lang=js& */ "./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeleteModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DeleteModal.vue?vue&type=template&id=cae0bcb2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DeleteModal.vue?vue&type=template&id=cae0bcb2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteModal_vue_vue_type_template_id_cae0bcb2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GoalCard.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/GoalCard.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoalCard.vue?vue&type=template&id=3c3caea4& */ "./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4&");
/* harmony import */ var _GoalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoalCard.vue?vue&type=script&lang=js& */ "./resources/js/components/GoalCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoalCard.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GoalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GoalCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GoalCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/GoalCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GoalCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./GoalCard.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GoalCard.vue?vue&type=template&id=3c3caea4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GoalCard.vue?vue&type=template&id=3c3caea4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GoalCard_vue_vue_type_template_id_3c3caea4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f42fb90& */ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=1f42fb90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Instagram.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Instagram.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Instagram.vue?vue&type=template&id=178c88d7& */ "./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7&");
/* harmony import */ var _Instagram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Instagram.vue?vue&type=script&lang=js& */ "./resources/js/components/Instagram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Instagram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Instagram.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Instagram.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Instagram.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Instagram.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Instagram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Instagram.vue?vue&type=template&id=178c88d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Instagram.vue?vue&type=template&id=178c88d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Instagram_vue_vue_type_template_id_178c88d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Loader.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Loader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=e79ec684& */ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=e79ec684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Navigation.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Navigation.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=d456e682& */ "./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Navigation.vue?vue&type=template&id=d456e682& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=d456e682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NotFound.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/NotFound.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=2ce50e5a& */ "./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js& */ "./resources/js/components/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NotFound.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/NotFound.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=template&id=2ce50e5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PageFooter.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PageFooter.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=template&id=5e81b4b5& */ "./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5&");
/* harmony import */ var _PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/PageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PageFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PageFooter.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/PageFooter.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PageFooter.vue?vue&type=template&id=5e81b4b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PageFooter.vue?vue&type=template&id=5e81b4b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_template_id_5e81b4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SideNavigation.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/SideNavigation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavigation.vue?vue&type=template&id=2e4b5f14& */ "./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14&");
/* harmony import */ var _SideNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavigation.vue?vue&type=script&lang=js& */ "./resources/js/components/SideNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SideNavigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SideNavigation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SideNavigation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SideNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SideNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SideNavigation.vue?vue&type=template&id=2e4b5f14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SideNavigation.vue?vue&type=template&id=2e4b5f14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavigation_vue_vue_type_template_id_2e4b5f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Snackbar.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Snackbar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=template&id=727e1820& */ "./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&");
/* harmony import */ var _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Snackbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Snackbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Snackbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Snackbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Snackbar.vue?vue&type=template&id=727e1820& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Snackbar.vue?vue&type=template&id=727e1820&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Snackbar_vue_vue_type_template_id_727e1820___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SubNavigation.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SubNavigation.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubNavigation.vue?vue&type=template&id=791b9619& */ "./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619&");
/* harmony import */ var _SubNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNavigation.vue?vue&type=script&lang=js& */ "./resources/js/components/SubNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SubNavigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SubNavigation.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SubNavigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SubNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubNavigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SubNavigation.vue?vue&type=template&id=791b9619& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SubNavigation.vue?vue&type=template&id=791b9619&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_template_id_791b9619___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tab.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Tab.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab.vue?vue&type=template&id=8dbef60c& */ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");
/* harmony import */ var _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tab.vue?vue&type=script&lang=js& */ "./resources/js/components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tab.vue?vue&type=template&id=8dbef60c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tab.vue?vue&type=template&id=8dbef60c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_template_id_8dbef60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tabs.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tabs.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");
/* harmony import */ var _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs.vue?vue&type=script&lang=js& */ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tabs.vue?vue&type=template&id=6e9bbb69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tabs.vue?vue&type=template&id=6e9bbb69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_6e9bbb69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserSkeletonLoader.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/UserSkeletonLoader.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSkeletonLoader.vue?vue&type=template&id=0dc0db96& */ "./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96&");
/* harmony import */ var _UserSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSkeletonLoader.vue?vue&type=script&lang=js& */ "./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserSkeletonLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserSkeletonLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserSkeletonLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSkeletonLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserSkeletonLoader.vue?vue&type=template&id=0dc0db96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserSkeletonLoader.vue?vue&type=template&id=0dc0db96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSkeletonLoader_vue_vue_type_template_id_0dc0db96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/WorkoutCard.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/WorkoutCard.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true& */ "./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true&");
/* harmony import */ var _WorkoutCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkoutCard.vue?vue&type=script&lang=js& */ "./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& */ "./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkoutCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "737627b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/WorkoutCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=style&index=0&id=737627b2&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_style_index_0_id_737627b2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutCard.vue?vue&type=template&id=737627b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutCard_vue_vue_type_template_id_737627b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/WorkoutItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/WorkoutItem.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkoutItem.vue?vue&type=template&id=8bb92396& */ "./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396&");
/* harmony import */ var _WorkoutItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkoutItem.vue?vue&type=script&lang=js& */ "./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkoutItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/WorkoutItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./WorkoutItem.vue?vue&type=template&id=8bb92396& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/WorkoutItem.vue?vue&type=template&id=8bb92396&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkoutItem_vue_vue_type_template_id_8bb92396___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/CreateBlockForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/forms/CreateBlockForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateBlockForm.vue?vue&type=template&id=245b00cc& */ "./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc&");
/* harmony import */ var _CreateBlockForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateBlockForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateBlockForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CreateBlockForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateBlockForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateBlockForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateBlockForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateBlockForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateBlockForm.vue?vue&type=template&id=245b00cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateBlockForm.vue?vue&type=template&id=245b00cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateBlockForm_vue_vue_type_template_id_245b00cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/CreateExerciseForm.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/forms/CreateExerciseForm.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateExerciseForm.vue?vue&type=template&id=bfbf01ba& */ "./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba&");
/* harmony import */ var _CreateExerciseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateExerciseForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateExerciseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CreateExerciseForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExerciseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExerciseForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExerciseForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateExerciseForm.vue?vue&type=template&id=bfbf01ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateExerciseForm.vue?vue&type=template&id=bfbf01ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateExerciseForm_vue_vue_type_template_id_bfbf01ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/CreateSetForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/forms/CreateSetForm.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateSetForm.vue?vue&type=template&id=3d377aa2& */ "./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2&");
/* harmony import */ var _CreateSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateSetForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CreateSetForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateSetForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateSetForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateSetForm.vue?vue&type=template&id=3d377aa2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateSetForm.vue?vue&type=template&id=3d377aa2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateSetForm_vue_vue_type_template_id_3d377aa2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/CreateUserForm.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/forms/CreateUserForm.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateUserForm.vue?vue&type=template&id=749b0596& */ "./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596&");
/* harmony import */ var _CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateUserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CreateUserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateUserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateUserForm.vue?vue&type=template&id=749b0596& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateUserForm.vue?vue&type=template&id=749b0596&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateUserForm_vue_vue_type_template_id_749b0596___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/CreateWorkoutForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/forms/CreateWorkoutForm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateWorkoutForm.vue?vue&type=template&id=346ee52c& */ "./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c&");
/* harmony import */ var _CreateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateWorkoutForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/CreateWorkoutForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateWorkoutForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateWorkoutForm.vue?vue&type=template&id=346ee52c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/CreateWorkoutForm.vue?vue&type=template&id=346ee52c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateWorkoutForm_vue_vue_type_template_id_346ee52c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/DuplicateWorkoutForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/forms/DuplicateWorkoutForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe& */ "./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe&");
/* harmony import */ var _DuplicateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DuplicateWorkoutForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DuplicateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/DuplicateWorkoutForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateWorkoutForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkoutForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/DuplicateWorkoutForm.vue?vue&type=template&id=6f059efe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkoutForm_vue_vue_type_template_id_6f059efe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/EditSetForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/forms/EditSetForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSetForm.vue?vue&type=template&id=dbe04fbe& */ "./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe&");
/* harmony import */ var _EditSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSetForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/EditSetForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditSetForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/EditSetForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditSetForm.vue?vue&type=template&id=dbe04fbe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/EditSetForm.vue?vue&type=template&id=dbe04fbe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSetForm_vue_vue_type_template_id_dbe04fbe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/forms/LoginForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/forms/LoginForm.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=727b6bd2& */ "./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/forms/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=727b6bd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/forms/LoginForm.vue?vue&type=template&id=727b6bd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_727b6bd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/lists/ExerciseList.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/lists/ExerciseList.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExerciseList.vue?vue&type=template&id=ffa7c70a& */ "./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a&");
/* harmony import */ var _ExerciseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExerciseList.vue?vue&type=script&lang=js& */ "./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExerciseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lists/ExerciseList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExerciseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExerciseList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/ExerciseList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExerciseList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExerciseList.vue?vue&type=template&id=ffa7c70a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/ExerciseList.vue?vue&type=template&id=ffa7c70a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExerciseList_vue_vue_type_template_id_ffa7c70a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/lists/UserList.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/lists/UserList.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=34f191ee& */ "./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/components/lists/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/lists/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/lists/UserList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/lists/UserList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=34f191ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/lists/UserList.vue?vue&type=template&id=34f191ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_34f191ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=b3c5cf30& */ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=b3c5cf30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home.vue?vue&type=template&id=b3c5cf30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_b3c5cf30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=3b6adb30& */ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=3b6adb30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Login.vue?vue&type=template&id=3b6adb30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_3b6adb30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/Blocks.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/trainer/Blocks.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blocks.vue?vue&type=template&id=6dd2242e& */ "./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e&");
/* harmony import */ var _Blocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blocks.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/Blocks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blocks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Blocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blocks.vue?vue&type=template&id=6dd2242e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Blocks.vue?vue&type=template&id=6dd2242e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blocks_vue_vue_type_template_id_6dd2242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateBlock.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateBlock.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DuplicateBlock.vue?vue&type=template&id=b7fd44b6& */ "./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6&");
/* harmony import */ var _DuplicateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DuplicateBlock.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DuplicateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/DuplicateBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateBlock.vue?vue&type=template&id=b7fd44b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateBlock.vue?vue&type=template&id=b7fd44b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateBlock_vue_vue_type_template_id_b7fd44b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateWorkout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateWorkout.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DuplicateWorkout.vue?vue&type=template&id=051b13b5& */ "./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5&");
/* harmony import */ var _DuplicateWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DuplicateWorkout.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DuplicateWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/DuplicateWorkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateWorkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DuplicateWorkout.vue?vue&type=template&id=051b13b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/DuplicateWorkout.vue?vue&type=template&id=051b13b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DuplicateWorkout_vue_vue_type_template_id_051b13b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/EditSet.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/trainer/EditSet.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditSet.vue?vue&type=template&id=4e79ddb6& */ "./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6&");
/* harmony import */ var _EditSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditSet.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/EditSet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditSet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/EditSet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditSet.vue?vue&type=template&id=4e79ddb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/EditSet.vue?vue&type=template&id=4e79ddb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditSet_vue_vue_type_template_id_4e79ddb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/Exercises.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/trainer/Exercises.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exercises.vue?vue&type=template&id=1e744e08& */ "./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08&");
/* harmony import */ var _Exercises_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exercises.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Exercises_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/Exercises.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Exercises_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Exercises.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Exercises.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Exercises_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Exercises.vue?vue&type=template&id=1e744e08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Exercises.vue?vue&type=template&id=1e744e08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Exercises_vue_vue_type_template_id_1e744e08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/User.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/trainer/User.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=a11bcf24& */ "./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/User.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/trainer/User.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=a11bcf24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/User.vue?vue&type=template&id=a11bcf24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_a11bcf24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/Users.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/trainer/Users.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=427c9675& */ "./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=427c9675& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Users.vue?vue&type=template&id=427c9675&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_427c9675___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/trainer/Workout.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/trainer/Workout.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workout.vue?vue&type=template&id=43f8d74a& */ "./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a&");
/* harmony import */ var _Workout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workout.vue?vue&type=script&lang=js& */ "./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Workout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/trainer/Workout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Workout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Workout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Workout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Workout.vue?vue&type=template&id=43f8d74a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/trainer/Workout.vue?vue&type=template&id=43f8d74a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Workout_vue_vue_type_template_id_43f8d74a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Goals.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/user/Goals.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Goals.vue?vue&type=template&id=31c94ef6& */ "./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6&");
/* harmony import */ var _Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Goals.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Goals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Goals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Goals.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/user/Goals.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Goals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Goals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Goals.vue?vue&type=template&id=31c94ef6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Goals.vue?vue&type=template&id=31c94ef6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Goals_vue_vue_type_template_id_31c94ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Overview.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/user/Overview.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview.vue?vue&type=template&id=0d864e44&scoped=true& */ "./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true&");
/* harmony import */ var _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& */ "./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d864e44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Overview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Overview.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/user/Overview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=style&index=0&id=0d864e44&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_style_index_0_id_0d864e44_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Overview.vue?vue&type=template&id=0d864e44&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Overview.vue?vue&type=template&id=0d864e44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_template_id_0d864e44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/user/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& */ "./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "aa78eaa4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=style&index=0&id=aa78eaa4&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_aa78eaa4_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=aa78eaa4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Profile.vue?vue&type=template&id=aa78eaa4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_aa78eaa4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserBlock.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/user/UserBlock.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true& */ "./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true&");
/* harmony import */ var _UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& */ "./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f15f4c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserBlock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/lib/loader.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=style&index=0&id=2f15f4c7&lang=sass&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_lib_loader_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_style_index_0_id_2f15f4c7_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlock.vue?vue&type=template&id=2f15f4c7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlock_vue_vue_type_template_id_2f15f4c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserBlocks.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/user/UserBlocks.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlocks.vue?vue&type=template&id=91577588& */ "./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588&");
/* harmony import */ var _UserBlocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBlocks.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBlocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserBlocks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlocks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBlocks.vue?vue&type=template&id=91577588& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserBlocks.vue?vue&type=template&id=91577588&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBlocks_vue_vue_type_template_id_91577588___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserWeek.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/user/UserWeek.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserWeek.vue?vue&type=template&id=147ba02a& */ "./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a&");
/* harmony import */ var _UserWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserWeek.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserWeek.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserWeek.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWeek.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWeek_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserWeek.vue?vue&type=template&id=147ba02a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWeek.vue?vue&type=template&id=147ba02a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWeek_vue_vue_type_template_id_147ba02a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/UserWorkout.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/user/UserWorkout.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserWorkout.vue?vue&type=template&id=1d666a57& */ "./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57&");
/* harmony import */ var _UserWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserWorkout.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/UserWorkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserWorkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWorkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWorkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserWorkout.vue?vue&type=template&id=1d666a57& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/UserWorkout.vue?vue&type=template&id=1d666a57&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserWorkout_vue_vue_type_template_id_1d666a57___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ "./resources/js/pages/Home.vue");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Login */ "./resources/js/pages/Login.vue");
/* harmony import */ var _pages_user_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/user/Overview */ "./resources/js/pages/user/Overview.vue");
/* harmony import */ var _pages_user_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/user/Profile */ "./resources/js/pages/user/Profile.vue");
/* harmony import */ var _pages_user_UserBlocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/UserBlocks */ "./resources/js/pages/user/UserBlocks.vue");
/* harmony import */ var _pages_user_UserBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/UserBlock */ "./resources/js/pages/user/UserBlock.vue");
/* harmony import */ var _pages_user_UserWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user/UserWeek */ "./resources/js/pages/user/UserWeek.vue");
/* harmony import */ var _pages_user_Goals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user/Goals */ "./resources/js/pages/user/Goals.vue");
/* harmony import */ var _pages_trainer_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/trainer/Users */ "./resources/js/pages/trainer/Users.vue");
/* harmony import */ var _pages_trainer_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/trainer/User */ "./resources/js/pages/trainer/User.vue");
/* harmony import */ var _pages_trainer_Exercises__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/trainer/Exercises */ "./resources/js/pages/trainer/Exercises.vue");
/* harmony import */ var _pages_trainer_Blocks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/trainer/Blocks */ "./resources/js/pages/trainer/Blocks.vue");
/* harmony import */ var _pages_trainer_Workout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/trainer/Workout */ "./resources/js/pages/trainer/Workout.vue");
/* harmony import */ var _pages_trainer_EditSet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/trainer/EditSet */ "./resources/js/pages/trainer/EditSet.vue");
/* harmony import */ var _pages_user_UserWorkout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/user/UserWorkout */ "./resources/js/pages/user/UserWorkout.vue");
/* harmony import */ var _pages_trainer_DuplicateWorkout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/trainer/DuplicateWorkout */ "./resources/js/pages/trainer/DuplicateWorkout.vue");
/* harmony import */ var _pages_trainer_DuplicateBlock__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/trainer/DuplicateBlock */ "./resources/js/pages/trainer/DuplicateBlock.vue");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/NotFound */ "./resources/js/components/NotFound.vue");


















/* harmony default export */ __webpack_exports__["default"] = ({
  mode: "history",
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: "*",
    name: "NotFound",
    component: _components_NotFound__WEBPACK_IMPORTED_MODULE_17__["default"]
  }, {
    path: "/",
    name: "Home",
    component: _pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"],
    meta: {
      guest: true
    }
  }, {
    path: "/login",
    name: "login",
    component: _pages_Login__WEBPACK_IMPORTED_MODULE_1__["default"],
    meta: {
      guest: true
    }
  }, {
    path: "/u/overview",
    name: "overview",
    component: _pages_user_Overview__WEBPACK_IMPORTED_MODULE_2__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/profile",
    name: "profile",
    component: _pages_user_Profile__WEBPACK_IMPORTED_MODULE_3__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/workouts",
    redirect: {
      name: "user-workouts-week"
    }
  }, {
    path: "/u/workouts/workout/:id",
    name: "user-workout",
    component: _pages_user_UserWorkout__WEBPACK_IMPORTED_MODULE_14__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/workouts/week",
    name: "user-workouts-week",
    component: _pages_user_UserWeek__WEBPACK_IMPORTED_MODULE_6__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/workouts/blocks",
    name: "user-workouts-blocks",
    component: _pages_user_UserBlocks__WEBPACK_IMPORTED_MODULE_4__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/workouts/block/:id",
    name: "user-workouts-block",
    component: _pages_user_UserBlock__WEBPACK_IMPORTED_MODULE_5__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/u/goals",
    name: "goals",
    component: _pages_user_Goals__WEBPACK_IMPORTED_MODULE_7__["default"],
    meta: {
      requiresAuth: true
    }
  }, {
    path: "/t/",
    redirect: {
      name: "users"
    }
  }, {
    path: "/t/users",
    name: "users",
    component: _pages_trainer_Users__WEBPACK_IMPORTED_MODULE_8__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  },, {
    path: "/t/users/:id",
    name: "user",
    component: _pages_trainer_User__WEBPACK_IMPORTED_MODULE_9__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/exercises",
    name: "exercises",
    component: _pages_trainer_Exercises__WEBPACK_IMPORTED_MODULE_10__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/users/:user_id/blocks/:block_id",
    name: "block",
    component: _pages_trainer_Blocks__WEBPACK_IMPORTED_MODULE_11__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/users/:user_id/blocks/duplicate/:block_id",
    name: "duplicate-block",
    component: _pages_trainer_DuplicateBlock__WEBPACK_IMPORTED_MODULE_16__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/users/:user_id/blocks/:block_id/workouts/:workout_id",
    name: "workout",
    component: _pages_trainer_Workout__WEBPACK_IMPORTED_MODULE_12__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/users/:user_id/blocks/:block_id/workouts/duplicate/:workout_id",
    name: "duplicate-workout",
    component: _pages_trainer_DuplicateWorkout__WEBPACK_IMPORTED_MODULE_15__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }, {
    path: "/t/users/:user_id/blocks/:block_id/workouts/:workout_id/sets/:set_id",
    name: "edit-set",
    component: _pages_trainer_EditSet__WEBPACK_IMPORTED_MODULE_13__["default"],
    meta: {
      requiresAuth: true,
      is_trainer: true
    }
  }]
});

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    status: "",
    token: $cookies.get("laravel_token") || "",
    user: JSON.parse(localStorage.getItem("user")) || {},
    role: JSON.parse(localStorage.getItem("role")) || {},
    msg: {
      type: "",
      message: "",
      show: false
    }
  },
  mutations: {
    auth_request: function auth_request(state) {
      state.status = "loading";
    },
    auth_success: function auth_success(state, payload) {
      state.status = "success";
      state.token = payload.token;
      state.user = payload.user;
      state.role = payload.role;
    },
    auth_error: function auth_error(state) {
      state.status = "error";
    },
    logout: function logout(state) {
      state.status = "";
      state.token = "";
      state.user = {};
      state.role = {};
    },
    update_request: function update_request(state) {
      state.status = "loading";
    },
    update_success: function update_success(state, payload) {
      state.status = "success";
      state.user = payload.user;
      state.role = payload.role;
    },
    update_error: function update_error(state) {
      state.status = "error";
    },
    add_message: function add_message(state, payload) {
      state.status = "add-message";
      state.msg = payload;
    },
    remove_message: function remove_message(state) {
      state.status = "remove-message";
      state.msg = {
        type: "",
        message: "",
        show: false
      };
    }
  },
  actions: {
    login: function login(_ref, user) {
      var commit = _ref.commit;
      return new Promise(function (resolve, reject) {
        commit("auth_request");
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
          url: "".concat("http://localhost:8000/api", "/login"),
          data: user,
          method: "POST"
        }).then(function (res) {
          var token = res.data.access_token;
          $cookies.set("laravel_token", token);
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          axios__WEBPACK_IMPORTED_MODULE_2___default()({
            url: "".concat("http://localhost:8000/api", "/user"),
            method: "GET"
          }).then(function (resp) {
            var user = resp.data.user;
            var role = resp.data.role;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("role", JSON.stringify(role));
            commit("auth_success", {
              token: token,
              user: user,
              role: role
            });
            resolve(resp);
          })["catch"](function (err) {
            commit("auth_error");
            $cookies.remove("laravel_token");
            localStorage.removeItem("user");
            localStorage.removeItem("role");
            reject(err);
          });
        })["catch"](function (error) {
          commit("auth_error");
          $cookies.remove("laravel_token");
          localStorage.removeItem("user");
          localStorage.removeItem("role");
          reject(error);
        });
      });
    },
    logout: function logout(_ref2) {
      var commit = _ref2.commit;
      return new Promise(function (resolve, reject) {
        commit("logout");
        $cookies.remove("laravel_token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        delete axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    updateUser: function updateUser(_ref3) {
      var commit = _ref3.commit;
      return new Promise(function (resolve, reject) {
        commit("update_request");
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
          url: "".concat("http://localhost:8000/api", "/user"),
          method: "GET"
        }).then(function (resp) {
          var user = resp.data.user;
          var role = resp.data.role;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("role", JSON.stringify(role));
          commit("update_success", {
            user: user,
            role: role
          });
          resolve(resp);
        })["catch"](function (err) {
          commit("update_error");
          $cookies.remove("laravel_token");
          localStorage.removeItem("user");
          localStorage.removeItem("role");
          reject(err);
        });
      });
    },
    add: function add(_ref4, message) {
      var commit = _ref4.commit;
      commit("add_message", message);
      setTimeout(function () {
        commit("remove_message");
      }, 4000);
    },
    remove: function remove(_ref5) {
      var commit = _ref5.commit;
      return new Promise(function (resolve, reject) {
        commit("remove_message");
        resolve();
      });
    }
  },
  getters: {
    authorized: function authorized(state) {
      return !!state.token;
    },
    authStatus: function authStatus(state) {
      return state.status;
    },
    isTrainer: function isTrainer(state) {
      return state.role ? state.role.name === "trainer" || state.role.name === "admin" : false;
    },
    isAdmin: function isAdmin(state) {
      return state.role ? state.role.name === "admin" : false;
    },
    user: function user(state) {
      return state.user;
    },
    role: function role(state) {
      return state.role;
    },
    isActive: function isActive(state) {
      return !!state.user.is_active;
    },
    getMsg: function getMsg(state) {
      return state.msg;
    }
  }
}));

/***/ }),

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/*! exports provided: gradients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradients", function() { return gradients; });
var gradients = {
  strength: {
    "default": "linear-gradient(to bottom right, #e52d27, #b31217)",
    hover: "linear-gradient(to top, rgba(229, 45, 39, 1), rgba(179, 18, 23, 0.5))"
  },
  hypertrophy: {
    "default": "linear-gradient(to bottom right, #4481eb, #04befe)",
    hover: "linear-gradient(to top, rgba(68, 129, 235, 1), rgba(4, 190, 254, 0.5))"
  },
  fitness: {
    "default": "linear-gradient(179.1deg,rgba(43, 170, 96, 1) 2.3%,rgba(129, 204, 104, 1) 98.3%)",
    hover: "linear-gradient(to top,rgba(43, 170, 96, 1), rgba(129, 204, 104, 0.5))"
  },
  rest: {
    "default": "linear-gradient(to top, rgba(134, 143, 150, 1), rgba(89, 97, 100, 1))",
    hover: "linear-gradient(to top, rgba(134, 143, 150, 1), rgba(89, 97, 100, 0.5))"
  }
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jsams/projects/gerbzilla/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/jsams/projects/gerbzilla/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);