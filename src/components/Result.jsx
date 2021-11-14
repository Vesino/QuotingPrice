import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const ResultQuote = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const MessageResult = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    text-align: center;
`;


const Result = ({quote}) => {
    return (
        <ResultQuote>
            <TransitionGroup
                component="p"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={quote}
                    timeout={{enter: 500, exit:500}}
                >
                    <MessageResult>El total es: ${quote}</MessageResult>
                </CSSTransition>
            </TransitionGroup>
        </ResultQuote>
    );
}
 
export default Result;