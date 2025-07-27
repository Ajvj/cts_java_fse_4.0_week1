import React from 'react';

const postStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  backgroundColor: '#fff'
};

const titleStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '10px'
};

const bodyStyle = {
  fontSize: '16px',
  color: '#333'
};

class Post extends React.Component {
  render() {
    return (
      <div style={postStyle}>
        <div style={titleStyle}>{this.props.title}</div>
        <div style={bodyStyle}>{this.props.body}</div>
      </div>
    );
  }
}

export default Post;
