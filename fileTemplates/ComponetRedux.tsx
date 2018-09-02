import {Component} from 'react';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

export interface IState {

  }

  export interface IProps {

  }

const mapStateToProps = (state: IReduxState) => ({
  /// nameStore: state.nameStore
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  /*
    onLoadingMail: () => {
     dispatch(Mail.Actions.onLoadingMail.REQUEST());
   },
  */
});

class ${NAME} extends Component<IProps, IState> {

  state: IState = {
  };

  render() {
    return (
      <div>Component ${NAME}</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(${NAME})