import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0,
  });

  const handleLeaveMessage = e => {
    const name = e.target.name;
    setFeedback({
      ...feedback,
      [name]: feedback[name] + 1,
    });
  };

  const countPositivePercentage = () => {
    const { Good, Neutral, Bad } = feedback;
    const total = Good + Neutral + Bad;
    const positivePercentage = ((Good / total) * 100).toFixed(1);
    if (Good > 0) {
      return Number(positivePercentage);
    } else {
      return 0;
    }
  };

  return (
    <div className=".container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveMessage={handleLeaveMessage}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedback.Good}
          neutral={feedback.Neutral}
          bad={feedback.Bad}
          total={feedback.Good + feedback.Neutral + feedback.Bad}
          positivePercentage={countPositivePercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};
