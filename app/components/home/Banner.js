var React = require("react");
var createReactClass = require("create-react-class");
var Link = require("react-router").Link;

var Banner = createReactClass({
    render: function () {
        return (
            <div className="row" id="banner">
                <div id="logoSection">
                    <span id="logoText">Giving Good(s) </span>
                </div>
                <div id="buttonSection">
                    <div id="btnDiv" className="">
                        <Link to="/donate"> <button type="button" className="bannerBTN btn btn-secondary btn-lg">Donate Goods</button></Link>
                        <Link to="/shelter"> <button type="button" className="bannerBTN btn btn-secondary btn-lg">Shelter Login</button></Link>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Banner;