/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';

import styles from './styles.css';
import Icon from 'Icon'

function Button(props) {
  let className = styles['button--default'];

  if (props.className) {
    className = props.className
  } else if (props.outlined) {
    className = styles['button--outlined']
  }

  let icon = props.icon ? <Icon type={props.icon} className={styles.icon}/> : null

  return props.handleRoute ?
    // If the Button has a handleRoute prop, we want to render a button
    <button className={className} onClick={ props.handleRoute }>{icon}{props.children}</button> :
    // Render an anchor tag
    <a className={className} href={props.href} onClick={props.onClick}>{icon}{props.children}</a>
}

Button.propTypes = {
  className: React.PropTypes.string,
  outline: React.PropTypes.bool,
  handleRoute: React.PropTypes.func,
  href: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Button;
