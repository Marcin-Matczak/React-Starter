import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import ReactHtmlParser from 'react-html-parser';


class Column extends React.Component {

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
      addCard: PropTypes.func,
    }

    render() {

      const {title, icon, cards, addCard} = this.props;

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
          
          
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>
         

        </section >
      );
    }
}

export default Column;