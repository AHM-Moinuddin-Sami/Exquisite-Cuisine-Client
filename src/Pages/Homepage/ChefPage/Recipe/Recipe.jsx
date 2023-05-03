// import { useState } from 'react';

// const TabContent = ({ title, content }) => (
//   <div className="p-4">
//     <h2 className="font-bold mb-2">{title}</h2>
//     <p>{content}</p>
//   </div>
// );

// const Tab = ({ title, active, onClick }) => (
//   <button
//     className={`px-4 py-2 font-bold ${active ? 'bg-gray-200' : ''}`}
//     onClick={onClick}
//   >
//     {title}
//   </button>
// );

// const TabbedContent = ({ tabs }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const activeTabContent = tabs[activeTab].content;

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1">
//         {tabs.map((tab, index) => (
//           <Tab
//             key={index}
//             title={tab.title}
//             active={index === activeTab}
//             onClick={() => setActiveTab(index)}
//           />
//         ))}
//       </div>
//       <div className="flex-1 overflow-auto">
//         <TabContent
//           title={tabs[activeTab].title}
//           content={activeTabContent}
//         />
//       </div>
//     </div>
//   );
// };

// const Recipe = () => {
//   const tabs = [
//     {
//       title: 'Tab 1',
//       content: 'This is the content of tab 1.',
//     },
//     {
//       title: 'Tab 2',
//       content: 'This is the content of tab 2.',
//     },
//     {
//       title: 'Tab 3',
//       content: 'This is the content of tab 3.',
//     },
//   ];

//   return <TabbedContent tabs={tabs} />;
// };

// export default Recipe;

import React from 'react';

const Recipe = (params) => {

    const {name, method, ingredients, rating} = params;

    return (
        <div>
            {name}
        </div>
    );
};

export default Recipe;