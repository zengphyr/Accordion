"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Accordion = void 0;
var react_1 = require("react");
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        //default state is false
        _this.state = { isOpen: false };
        _this.handleExpand = _this.handleExpand.bind(_this);
        return _this;
    }
    Accordion.prototype.handleExpand = function () {
        //const newState = this.state.isOpen === true ? false : true;
        this.setState({ isOpen: !this.state.isOpen });
    };
    Accordion.prototype.render = function () {
        return (<div className="box">
                <div className="title-box" onClick={this.handleExpand}>
                    <span className="title">{this.props.title}</span>
                    <span className="icon"><i className={"fa fa-play-circle" + (!this.state.isOpen ? ' down' : '')}></i></span>
                    <div className="clearfix"></div>
                </div>
                {this.state.isOpen && <div className="content">{this.props.children}</div>}
            </div>);
    };
    return Accordion;
}(react_1["default"].Component));
exports.Accordion = Accordion;
