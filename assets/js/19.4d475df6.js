(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{585:function(t,a,s){t.exports=s.p+"assets/img/image-20210318211718571.0bf0f706.png"},635:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("我在总结Array中的方法的时候，发现带有遍历效果的函数中有许多共同之处，因此写一篇总结。")]),t._v(" "),n("blockquote",[n("p",[t._v("此文没有将 "),n("code",[t._v("reduce")]),t._v(" 方法加进来，因为它的参数和其它的方法不一样。")])]),t._v(" "),n("h2",{attrs:{id:"方法列表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法列表"}},[t._v("#")]),t._v(" 方法列表")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("Array.prototype.every()")]),t._v(" "),n("ul",[n("li",[t._v("测试数组的"),n("strong",[t._v("所有")]),t._v("元素是否能通过回调函数的测试，返回一个布尔值")])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.some()")]),t._v(" "),n("ul",[n("li",[t._v("测试数组的元素是否"),n("strong",[t._v("至少有一个")]),t._v("能够通过回调函数的测试，返回一个布尔值")])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.forEach()")]),t._v(" "),n("ul",[n("li",[t._v("遍历数组，返回"),n("code",[t._v("undefined")])])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.map()")]),t._v(" "),n("ul",[n("li",[t._v("遍历数组，返回一个数组")])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.filter()")]),t._v(" "),n("ul",[n("li",[t._v("过滤数组，返回一个过滤后的数组")])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.find()")]),t._v(" "),n("ul",[n("li",[t._v("查找数组中符合条件的第一个元素，返回这个元素的值")])])]),t._v(" "),n("li",[n("code",[t._v("Array.prototype.findIndex()")]),t._v(" "),n("ul",[n("li",[t._v("查找数组中符合条件的第一个元素，返回这个元素的下标")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("每个方法详细的使用方法可以查阅"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN——Array"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"共同之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#共同之处"}},[t._v("#")]),t._v(" 共同之处")]),t._v(" "),n("h3",{attrs:{id:"参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),n("p",[n("code",[t._v("callback")]),t._v(" ：在数组每一项上执行的函数，接收 3 个参数：")]),t._v(" "),n("ul",[n("li",[n("p",[n("code",[t._v("item")])]),t._v(" "),n("p",[t._v("当前遍历到的元素。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("index")]),t._v("可选")]),t._v(" "),n("p",[t._v("当前遍历到的索引。")])]),t._v(" "),n("li",[n("p",[n("code",[t._v("array")]),t._v("可选")]),t._v(" "),n("p",[t._v("数组本身。")])])]),t._v(" "),n("p",[n("code",[t._v("thisArg")]),t._v(" 可选：")]),t._v(" "),n("ul",[n("li",[t._v("执行回调时用作"),n("code",[t._v("this")]),t._v(" 的对象。")])]),t._v(" "),n("h3",{attrs:{id:"原数组不改变"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原数组不改变"}},[t._v("#")]),t._v(" 原数组不改变")]),t._v(" "),n("p",[t._v("也就是调用这个方法的数组，本身是不会被这个方法所改变的。不会像 "),n("code",[t._v("sort")]),t._v(" 那样，改变原来的数组。")]),t._v(" "),n("p",[t._v("但是，你是可以通过 "),n("code",[t._v("callback")]),t._v(" 来修改原来的数组的。")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" noEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// forEach 本身不会修改原数组, 但是里面的回调可能会修改原数组")]),t._v("\n  arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有效果的")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("noEffect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (3) [2, 4, 6]")]),t._v("\n")])])]),n("h3",{attrs:{id:"遍历的范围是确定的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遍历的范围是确定的"}},[t._v("#")]),t._v(" 遍历的范围是确定的")]),t._v(" "),n("p",[t._v("但数组调用该方法，该方法开始执行的时候，遍历的长度就已经确定了，如果在遍历的过程中，添加了元素，那么这个元素将不会被遍历到。")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 无法遍历到4")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("虽然遍历的范围是确定的范围是确定的，但是遍历的值不是确定的。")])]),t._v(" "),n("p",[t._v("如果我们在方法遍历到某一个元素之前，修改了这个元素的值，那么遍历的结果将会以修改后的值为准。")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除arr的第三个值, 让他的索引值为空，因此不会打印出3，因为值改变了，我们把他的索引删掉了")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上面是删除索引值，这里的例子是修改元素的值")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("999")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 2 999")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (4) [1, 2, empty, 999]")]),t._v("\n")])])]),n("h2",{attrs:{id:"异同之处"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异同之处"}},[t._v("#")]),t._v(" 异同之处")]),t._v(" "),n("p",[t._v("大部分地方其实是相同的，因此我用一个表格来描述，会更加的清晰")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("方法名称")]),t._v(" "),n("th",[t._v("返回值")]),t._v(" "),n("th",[t._v("稀疏/空索引")]),t._v(" "),n("th",[t._v("注意点")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("every()")])]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("跳过")]),t._v(" "),n("td",[t._v("收到空数组，一定返回 "),n("code",[t._v("true")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("some()")])]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("跳过")]),t._v(" "),n("td",[t._v("收到空数组，一定返回 "),n("code",[t._v("false")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("forEach()")])]),t._v(" "),n("td",[t._v("undefined")]),t._v(" "),n("td",[t._v("跳过")]),t._v(" "),n("td",[t._v("遍历无法 "),n("code",[t._v("return")]),t._v("，没有返回值")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("map()")])]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("跳过")]),t._v(" "),n("td",[n("strong",[t._v("会跳过空索引，但是结果会出现空索引")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("filter()")])]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("跳过")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[n("code",[t._v("find()")])]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[n("strong",[t._v("不跳过")])]),t._v(" "),n("td",[t._v("若没找到返回 "),n("code",[t._v("undefined")]),t._v("，空索引值为undefined")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("findIndex()")])]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[n("strong",[t._v("不跳过")])]),t._v(" "),n("td",[t._v("若没找到返回 -1，空索引值为undefined")])])])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("关于稀疏数组")])]),t._v(" "),n("p",[t._v("稀疏数组也就是索引值为空的数组")])]),t._v(" "),n("h3",{attrs:{id:"关于map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于map"}},[t._v("#")]),t._v(" 关于map")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 很明显，empty的时候回调函数里面的代码是没有执行的")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'current item'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (4) [2, 4, empty, 8]")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(585),alt:"运行结果"}})]),t._v(" "),n("h3",{attrs:{id:"关于find-findeindex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于find-findeindex"}},[t._v("#")]),t._v(" 关于find/findeIndex")]),t._v(" "),n("div",{staticClass:"language-JavaScript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即使索引值为空，也会访问到，并且值为undefined")]),t._v("\n  result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (4) [1, 2, undefined, 4]")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);