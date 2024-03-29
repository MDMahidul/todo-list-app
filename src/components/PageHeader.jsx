import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div>
      <h3 className="md:text-2xl text-xl font-semibold text-amber-400 dark:text-white border-b-2 pb-2">
        {title}
      </h3>
    </div>
  );
};

export default PageHeader;