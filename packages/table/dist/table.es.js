import React from"react";import PropTypes from"prop-types";import classnames from"classnames";var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},objectWithoutProperties=function(e,r){var t={};for(var o in e)r.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Table=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]),o=t.className,a=t.striped,l=t.hover,n=t.scroll,c=objectWithoutProperties(t,["className","striped","hover","scroll"]),p=classnames("table",o,{"table-striped":a,"table-hover":l,"table-scroll":n});return React.createElement("table",_extends({},c,{className:p}),r)};Table.propTypes={children:PropTypes.any,className:PropTypes.any,striped:PropTypes.bool,hover:PropTypes.bool,scroll:PropTypes.bool};var Header=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]);return React.createElement("thead",t,r)};Header.propTypes={children:PropTypes.any};var Body=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]);return React.createElement("tbody",t,r)};Body.propTypes={children:PropTypes.any};var Row=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]),o=t.className,a=t.active,l=objectWithoutProperties(t,["className","active"]),n=n(o,{active:a});return React.createElement("tr",_extends({},l,{className:n}),r)};Row.propTypes={children:PropTypes.any,className:PropTypes.any,active:PropTypes.bool};var Heading=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]);return React.createElement("th",t,r)};Heading.propTypes={children:PropTypes.any};var Cell=function(e){var r=e.children,t=objectWithoutProperties(e,["children"]);return React.createElement("td",t,r)};Cell.propTypes={children:PropTypes.any},Table.Header=Header,Table.Body=Body,Table.Row=Row,Table.Heading=Heading,Table.Cell=Cell;export{Table,Header,Body,Row,Heading,Cell};
//# sourceMappingURL=table.es.js.map