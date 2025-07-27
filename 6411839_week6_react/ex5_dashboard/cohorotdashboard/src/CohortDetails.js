import React from 'react';
import styles from './CohortDetails.module.css'; // Import CSS module

function CohortDetails(props) {
  const { cohortName, status, startDate, endDate } = props;

  // Use inline style based on status
  const statusColor = status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: statusColor }}>{cohortName}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Start Date:</dt>
        <dd>{startDate}</dd>
        <dt>End Date:</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
