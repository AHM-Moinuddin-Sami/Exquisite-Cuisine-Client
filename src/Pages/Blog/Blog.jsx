import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {

    const ref = React.createRef();

    return (
        <div className="bg-white mt-3 py-2">
            <div className='text-center'>
                <h3 className='text-4xl font-semibold mb-3'>Blog Section</h3>
                <div className='bg-red-400 md:w-1/12 w-full mx-auto text-white rounded py-1'>
                    <Pdf targetRef={ref} filename="blog.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
            </div>
            <div className='' ref={ref}>
                <h3><span className='font-bold text-xl'>Question</span>: What is difference between controlled and uncontrolled components?</h3>
                <p><span className='font-bold'>Answer</span>: The difference between controlled and uncontrolled components are based on how they use the data entered by the user. Uncontrolled components manage their state interally and directly access the DOM. On the other hand, controlled components have their states contolled by React. Therefore, uncontrolled componenets are self sufficient, but they are less predictable and provide less controlled than their controlled counterpart, but they also require much less code to write.</p>

                <h3><span className='font-bold text-xl'>Question</span>: What is the difference between Node.js and Express.js?</h3>
                <p><span className='font-bold'>Answer</span>: PropTypes is a built in React library that allows for props data type validation.After importing PropTypes from 'prop-types' package, you can define a prop types object and specify the data type of the props. If a prop that has been passed into that component is of a type of than the one specified, an error message will be displayed. This kind of validation is done to catch errors early and make your code more compact.</p>

                <h3><span className='font-bold text-xl'>Question</span>: How to validate React props using PropTypes?</h3>
                <p><span className='font-bold'>Answer</span>: Node.js is a cross-platform, open-source runtime server environment for executing JavaScript code outside of a web browser on a local server. Express.js, on the other hand, is a back end web application framework that is built on top of Node.js for building RESTful APIs and provides additional features and functionality to help developers create web applications more easily. In other words, Node.js is a platform, while Express.js is a tool that runs on top of that platform to simplify web development.</p>

                <h3><span className='font-bold text-xl'>Question</span>: What is a custom hook, and why will you create a custom hook?</h3>
                <p><span className='font-bold'>Answer</span>:In React, a custom hook is an easy to use function that enables you to reuse stateful logic among different components. It is an efficient way to abstract away complex logic and create reusable functionality. You can share logic throught components using custom hooks with flexibly.  Custom hooks are started with 'use' and it may call other hooks. You can develop custom hooks for various use cases, including data fetching, form input handling, global state management, and others. By employing custom hooks, you can remove duplicated logic thus reducing redundancy, boost code modularity and reusability, and enhance the overall structure and clarity of your codebase.</p>
            </div>
        </div>
    );
};

export default Blog;