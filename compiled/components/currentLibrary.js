'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentLibrary = function (_React$Component) {
  _inherits(CurrentLibrary, _React$Component);

  function CurrentLibrary(props) {
    _classCallCheck(this, CurrentLibrary);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentLibrary).call(this, props));

    _this.state = {
      library: []
    };
    _this.bindKey = _this.bindKey.bind(_this);
    return _this;
  }

  _createClass(CurrentLibrary, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLibrary();
    }
  }, {
    key: 'getLibrary',
    value: function getLibrary() {
      $.get('/soundLibrary', function (sounds) {
        this.setState({
          library: sounds
        });
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' CURRENT LIBRARY '
        ),
        React.createElement(
          'ul',
          null,
          this.state.library.map(function (sound, index) {
            return React.createElement(
              'li',
              { key: index },
              ' Name: ',
              sound.name,
              ' Link: ',
              sound.soundLink,
              ' ',
              React.createElement(
                'button',
                { onClick: this.bindKey(index) },
                ' Bind Key '
              )
            );
          })
        )
      );
    }
  }]);

  return CurrentLibrary;
}(React.Component);

ReactDOM.render(React.createElement(CurrentLibrary, null), document.getElementById('currentLib'));