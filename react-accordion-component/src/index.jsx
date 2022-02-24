import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion'


const topics = [
    {
        id: 1,
        title: 'HyperText Markup Language',
        content: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
    },
    {
        id: 2,
        title: 'Cascading Style Sheets',
        content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
    },
    {
        id: 3,
        title: 'JavaScript',
        content: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[14] It has dynamic typing, prototype-based object-orientation, and first-class functions.'
    }
]

ReactDOM.render(

    <Accordion topics={topics} />,
    document.getElementById('root')
);