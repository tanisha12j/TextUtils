import React from 'react';

interface AlertProps {
  alert: {
    type: string;
    msg: string;
  } | null;
}

const Alert: React.FC<AlertProps> = (props) => {
  const capitalize = (word: string) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;
