/*jshint esnext:true, browserify:true, unused:vars */
'use strict';

import React from 'react/addons';

/*
 * MyComponent Component
 */
let MyComponent = React.createClass({

  /*
   * Mixins
   * see: https://facebook.github.io/react/docs/component-specs.html#mixins
   */
  mixins: [/* TODO add mixins */],

  /*
   * propTypes
   * see: https://facebook.github.io/react/docs/component-specs.html#proptypes
   */
  propTypes: {
    firstProp: React.PropTypes.string,
    secondProp: React.PropTypes.object.isRequired
  },

  /*
   * statics
   * see: https://facebook.github.io/react/docs/component-specs.html#statics
   */
  statics: {/* TODO define static methods */},

  /*
   * object getDefaultProps()
   * see: https://facebook.github.io/react/docs/component-specs.html#getdefaultprops
   */
  getDefaultProps() {
    return {
      // TODO define default prop values
    };
  },

  /*
   * object getInitialState()
   * see: https://facebook.github.io/react/docs/component-specs.html#getinitialstate
   */
  getInitialState() {
    return {
      // TODO override initial state
    };
  },

  /*
   * componentWillMount()
   * see https://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount
   */
  componentWillMount() {
    // TODO called before the component is mounted
  },

  /*
   * componentDidMount()
   * see: https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount
   */
  componentDidMount() {
    // TODO called after the component is mounted
  },

  /*
   * componentWillReceiveProps(object nextProps)
   * see: https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops
   */
  componentWillReceiveProps(nextProps) {
    // TODO called before component receives props
  },

  /*
   * boolean shouldComponentUpdate(object nextProps, object nextState)
   * see: https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate
   */
  shouldComponentUpdate(nextProps, nextState) {
    // TODO signal if prop and state transition should trigger an update or not.
    // TLDR: a way to skip the diff algorithm and increase performance.
  },

  /*
   * componentWillUpdate(object nextProps, object nextState)
   * see: https://facebook.github.io/react/docs/component-specs.html#updating-componentwillupdate
   */
  componentWillUpdate(nextProps, nextState) {
    // TODO called before the component updates
  },

  /*
   * componentDidUpdate(object prevProps, object prevState)
   * see: https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
   */
  componentDidUpdate(prevProps, prevState) {
    // TODO called after the component updates
  },

  /*
   * componentWillUnmount()
   * see: https://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount
   */
  componentWillUnmount() {
    // TODO called before the component is unmounted
  },

  /*
   * ReactElement render()
   * see: https://facebook.github.io/react/docs/component-specs.html#render
   */
  render() {
    // TODO edit this scaffold to suit your needs.
    return (
      <div>
        <div>firstProp: {this.props.firstProp}</div>
        <div>secondProp: {this.props.secondProp}</div>
      </div>
    );
  }
});

export default MyComponent;
