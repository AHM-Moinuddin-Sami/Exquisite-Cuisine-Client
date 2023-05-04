import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3><span className='font-bold text-xl'>Question</span>: What is difference between controlled and uncontrolled components?</h3>
            <p><span className='font-bold'>Answer</span>: The difference between controlled and uncontrolled components are based on how they use the data entered by the user. Uncontrolled components manage their state interally and directly access the DOM. On the other hand, controlled components have their states contolled by React. Therefore, uncontrolled componenets are self sufficient, but they are less predictable and provide less controlled than their controlled counterpart, but they also require much less code to write.</p>
        </div>
    );
};

export default Blog;