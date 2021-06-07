import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';
import ReactHtmlParser from 'react-html-parser';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {

    const {title} = this.props;

    return (
      <p className={styles.component}>{ReactHtmlParser(title)}</p>

      
    );
  }
}

export default Card; 