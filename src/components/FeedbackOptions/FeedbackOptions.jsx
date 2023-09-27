import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveMessage }) => {
  return (
    <div className={css.button_nav}>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          name={option}
          onClick={onLeaveMessage}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveMessage: PropTypes.func,
};
