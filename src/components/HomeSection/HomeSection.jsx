import { icon } from 'img';
import GetStartedLink from '../GetStartedLink/GetStartedLink';
import css from './HomeSection.module.css';

const HomeSection = () => {
  return (
    <div className={`${css.container} container`}>
      <div className={css.contentWrapper}>
        <h1>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={css.introText}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <GetStartedLink />
      </div>
      <div className={css.decorativeWrapper}>
        <div className={css.featureBadge}>
          <span>
            <svg>
              <use href={`${icon}#icon-check`} />
            </svg>
          </span>
          <p className={css.badgeText}>
            Experienced psychologists <span>15,000</span>
          </p>
        </div>
        <span className={css.orangeElement}>
          <svg>
            <use href={`${icon}#icon-users-symbol`} />
          </svg>
        </span>
        <span className={css.violetElement}>
          <svg>
            <use href={`${icon}#icon-question-symbol`} />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default HomeSection;
