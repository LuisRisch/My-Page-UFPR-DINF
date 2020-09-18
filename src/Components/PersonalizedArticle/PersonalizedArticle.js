import React from 'react';
import './PersonalizedArticle.css';

function PersonalizedArticle(props) {
    return (
        <article id = 'Personalized-Text'>
            {props.Text}
        </article>
    );
}

export default PersonalizedArticle; 