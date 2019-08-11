import React from 'react';
import PropTypes from 'prop-types';
import './ResultList.scss';
import { animated, useTrail } from 'react-spring';
import { FaExternalLinkSquareAlt, FaUser, FaCommentAlt, FaClock } from 'react-icons/fa';
import { distanceInWordsStrict } from 'date-fns'


const Result = ({ key, result: { url, title, author, num_comments, created_at } }) => {
  return (<div key={key} className="news">
    <h3>
      <a href={url}>     
        {title}
      </a>
    </h3>
    <div className="detail">
      <div className="when">
         <FaClock /> {distanceInWordsStrict(new Date(created_at), new Date(), {addSuffix: false})} ago
      </div>

      <div className="author">
         <FaUser /> {author}
      </div>
      <div className="comments">
         <FaCommentAlt /> {num_comments}
      </div>
      <div className="homepage">
        <a href={url}> <FaExternalLinkSquareAlt /> {url.split('/')[2]}</a>
      </div>
      
    </div>
  </div>
  );
};

const ResultList = ({ results }) => {
  const trail = useTrail(results.length, {
    from: { marginBottom: 40, opacity: 0,},
    to: { marginBottom: 0, opacity: 1,}
  })

  return (<div className="result-list">
    {trail.map((props, index) => (
      <animated.div key={index} style={props}>
        <Result key={index} result={results[index]} />
      </animated.div>
    ))}
  </div>);
};

ResultList.propTypes = {
  results: PropTypes.array,
};

ResultList.defaultProps = {
  results: [],
};

Result.propTypes = {
  result: PropTypes.object.isRequired,
  key: PropTypes.number,
};

Result.defaultProps = {
  key: null,
};

export default ResultList;
