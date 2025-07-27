import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortName: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-01',
      endDate: '2025-08-15',
    },
    {
      cohortName: 'Spring Boot Training',
      status: 'completed',
      startDate: '2025-06-01',
      endDate: '2025-06-30',
    },
    { cohortName: 'Data Science Fundamentals',
      status: 'ongoing',
      startDate: '2025-05-15',
      endDate: '2025-07-15',
    },
    { cohortName: 'Machine Learning Basics',
      status: 'completed',

      startDate: '2025-04-01',
      endDate: '2025-04-30',
    },
    { cohortName: 'Full Stack Development',
      status: 'ongoing',
      startDate: '2025-03-01',
      endDate: '2025-05-01',
    }
  ];

  return (
    <div style={{ padding: '30px' }}>
      <h2>Cohort Dashboard</h2>
      {cohorts.map((cohort, idx) => (
        <CohortDetails key={idx} {...cohort} />
      ))}
    </div>
  );
}

export default App;
