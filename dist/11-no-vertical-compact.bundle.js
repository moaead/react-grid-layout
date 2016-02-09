webpackJsonp([10],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(10);
	var _ = __webpack_require__(15);
	var ReactGridLayout = __webpack_require__(8);

	var NoCompactingLayout = React.createClass({
	  displayName: 'NoCompactingLayout',

	  mixins: [PureRenderMixin],

	  propTypes: {
	    onLayoutChange: React.PropTypes.func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: "layout",
	      items: 50,
	      cols: 12,
	      rowHeight: 30,
	      // This turns off compaction so you can place items wherever.
	      verticalCompact: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    var layout = this.generateLayout();
	    return {
	      layout: layout
	    };
	  },
	  generateDOM: function generateDOM() {
	    return _.map(_.range(this.props.items), function (i) {
	      return React.createElement(
	        'div',
	        { key: i },
	        React.createElement(
	          'span',
	          { className: 'text' },
	          i
	        )
	      );
	    });
	  },
	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var y = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
	      return { x: i * 2 % 12, y: Math.floor(i / 6) * y, w: 2, h: y, i: i };
	    });
	  },


	  onLayoutChange: function onLayoutChange(layout) {
	    this.props.onLayoutChange(layout);
	  },

	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      _extends({ layout: this.state.layout, onLayoutChange: this.onLayoutChange
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});

	module.exports = NoCompactingLayout;

	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(9)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }
]);