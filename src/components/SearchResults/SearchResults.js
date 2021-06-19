import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import ReactHtmlParser from 'react-html-parser';


class SearchResults extends React.Component {

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }

    render() {

      const {title, icon, cards} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{ReactHtmlParser(title)}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}        
          </div>
        </section >
      );
    }
}

export default SearchResults;