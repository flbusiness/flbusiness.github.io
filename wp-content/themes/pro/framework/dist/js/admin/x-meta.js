var tco="object"==typeof tco?tco:{};tco.postMetaBoxes=function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=38)}({0:function(e,t){e.exports=window.jQuery},38:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a);n()(function(){var e=window.wp,t=n()(document.body).hasClass("block-editor-page")&&e&&e.data&&e.data.subscribe;function o(e){n()("#x-meta-box-quote, #x-meta-box-link, #x-meta-box-video, #x-meta-box-audio").css("display","none"),e&&n()("#x-meta-box-".concat(e)).css("display","block")}var a=n()('#post-formats-select input[type=radio][name="post_format"]');a.length>0&&(o(n()('#post-formats-select input[type=radio][name="post_format"]:checked').val()),a.change(function(){o(n()(this).val())})),t&&(o(),e.data.subscribe(function(){var t=e.data.select("core/editor").getEditedPostAttribute("format");t&&o(t)}));var i=["template-blank-7.php","template-blank-3.php","template-blank-8.php","template-blank-6.php"];function r(e){n()("#x-meta-box-page-icon").toggle(0===(e||"").indexOf("template-blank")),n()("#x-meta-box-portfolio").toggle("template-layout-portfolio.php"===e),n()("#x-meta-box-slider-above, #x-meta-box-slider-below").toggle(!i.includes(e))}var l=n()("#page_template");if(l.length>0&&(r(l.val()),l.on("change",function(){r(l.val())})),t){r();var s="";e.data.subscribe(function(){var t=e.data.select("core/editor").getEditedPostAttribute("template");s!==t&&(r(t),s=t)})}var c=n()("#_x_slider_above"),p=c.parents("tr").siblings();"Deactivated"===n()("#_x_slider_above option:selected").text()&&p.css("display","none"),c.change(function(){"Deactivated"===n()("#_x_slider_above option:selected").text()?p.css("display","none"):p.css("display","table-row")});var d=n()("#_x_slider_below"),u=d.parents("tr").siblings();"Deactivated"===n()("#_x_slider_below option:selected").text()&&u.css("display","none"),d.change(function(){"Deactivated"===n()("#_x_slider_below option:selected").text()?u.css("display","none"):u.css("display","table-row")});var b=n()("#x-meta-box-portfolio-item-video");n()('input[name*="_x_portfolio_media"][value="Video"]').is(":checked")||b.css("display","none"),n()('input[name*="_x_portfolio_media"]').change(function(){n()('input[name*="_x_portfolio_media"][value="Video"]').is(":checked")?b.css("display","block"):b.css("display","none")}),n()(".wp-color-picker").wpColorPicker()})}});
//# sourceMappingURL=x-meta.js.map