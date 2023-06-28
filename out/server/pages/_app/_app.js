(() => {
var exports = {};
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 8488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/MainNav.tsx



const MainNav = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#f1f4f9] fixed md:flex flex-col items-center w-screen px-7 hidden z-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center w-full",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "px-6 pt-6 pb-4",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/logo.webp",
                        alt: "logo",
                        width: 100,
                        height: 100
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-2xl flex-1 flex flex-col gap-y-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: "都市社会経済システム分析研究室へようこそ！"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-lg",
                                    children: "Welcome to Socio-Economic Analysis of Urban System Lab!"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "トップ",
                                    subtitle: "Top",
                                    href: "/"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "曽道智教授",
                                    subtitle: "Prof. Zeng",
                                    href: "/zeng"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "伊藤亮准教授",
                                    subtitle: "Assoc. Prof. Itoh",
                                    href: "/itoh"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "研究室紹介",
                                    subtitle: "Labs",
                                    href: "/labs"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "ゼミ",
                                    subtitle: "Seminars",
                                    href: "/seminars"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "ワークショップ",
                                    subtitle: "Workshops",
                                    href: "/workshops"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainLink, {
                                    title: "連絡先",
                                    subtitle: "Contact us",
                                    href: "/contact"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const MainLink = ({ title , subtitle , href  })=>{
    const router = (0,router_namespaceObject.useRouter)();
    const isActive = router.pathname === href;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: `text-[#082382] ${isActive ? "border-t-4" : "border-t"} flex-1 px-1 pt-1 border-[#082382] mx-2 hover:border-t-4 text-sm`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs",
                children: subtitle
            })
        ]
    });
};

;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/MobileMainNav.tsx



const MobileMainNav = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const close = ()=>setIsOpen(false);
    return /*#__PURE__*/ _jsx("div", {
        className: "md:hidden fixed bg-[#f1f4f9] w-screen",
        children: isOpen ? /*#__PURE__*/ _jsxs("div", {
            children: [
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "トップ",
                    subtitle: "Top",
                    href: "/",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "曽道智教授",
                    subtitle: "Prof. Zeng",
                    href: "/zeng",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "伊藤亮准教授",
                    subtitle: "Assoc. Prof. Itoh",
                    href: "/itoh",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "研究室紹介",
                    subtitle: "Introduction",
                    href: "/intro",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "ゼミ",
                    subtitle: "Seminars",
                    href: "/seminars",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "ワークショップ",
                    subtitle: "Workshops",
                    href: "/workshops",
                    close: close
                }),
                /*#__PURE__*/ _jsx(MobileMainLink, {
                    title: "連絡先",
                    subtitle: "Contact us",
                    href: "/contact",
                    close: close
                }),
                /*#__PURE__*/ _jsx("div", {
                    onClick: ()=>setIsOpen(false),
                    children: "閉じる"
                })
            ]
        }) : /*#__PURE__*/ _jsx("div", {
            className: "h-10 flex justify-center items-center",
            onClick: ()=>setIsOpen(true),
            children: /*#__PURE__*/ _jsxs("div", {
                className: "flex flex-col items-center justify-around h-6",
                children: [
                    /*#__PURE__*/ _jsx(IconBar, {}),
                    /*#__PURE__*/ _jsx(IconBar, {}),
                    /*#__PURE__*/ _jsx(IconBar, {})
                ]
            })
        })
    });
};
const IconBar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: " bg-indigo-900 w-6 h-1"
    });
};
const MobileMainLink = ({ title , subtitle , href  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-center mt-6 pr-7",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-40 flex flex-col justify-between items-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-xs",
                        children: subtitle
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/MobileDrawer.tsx




const MobileDrawer = ()=>{
    const [drawerOpened, setDrawerOpened] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-screen px-4 py-4",
                onClick: ()=>setDrawerOpened(true),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/logo.webp",
                            alt: "logo",
                            width: 40,
                            height: 40
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-6 w-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fixed",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "h-6 w-6 flex flex-col items-center justify-around",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(IconBar, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(IconBar, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(IconBar, {})
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                anchor: "right",
                open: drawerOpened,
                onClose: ()=>setDrawerOpened(false),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-fit",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "トップ",
                            subtitle: "Top",
                            href: "/"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "曽道智教授",
                            subtitle: "Prof. Zeng",
                            href: "/zeng"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "伊藤亮准教授",
                            subtitle: "Assoc. Prof. Itoh",
                            href: "/itoh"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "研究室紹介",
                            subtitle: "Labs",
                            href: "/labs"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "ゼミ",
                            subtitle: "Seminars",
                            href: "/seminars"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "ワークショップ",
                            subtitle: "Workshops",
                            href: "/workshops"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MobileMainLink, {
                            title: "連絡先",
                            subtitle: "Contact us",
                            href: "/contact"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-1 text-xs text-center",
                children: "都市社会経済システム分析研究室へようこそ!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs text-center mb-3",
                children: "Welcome to Socio-Economic Analysis of Urban System Lab!"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/MyFooter.tsx

const MyFooter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-1 text-xs -mt-5",
        children: "DESIGNED BY GUO XIAOQI"
    });
};

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#f1f4f9] min-h-screen flex flex-col items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainNav, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MobileDrawer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MyFooter, {})
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(8488)));
module.exports = __webpack_exports__;

})();