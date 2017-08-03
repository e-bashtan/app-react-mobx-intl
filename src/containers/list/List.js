import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';



const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 1500)
  }

  render() {


    return (
      <div>
        <Fade in={this.state.show}>
          <div>This is list</div>
        </Fade>
      </div>
    );
  }
}

export default List;
