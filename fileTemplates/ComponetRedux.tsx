import {Component} from 'react';
import * as React from 'react';
import { connect } from 'react-redux';

export interface IState {

}

export interface IProps {

}

const mapStateToProps = (state: IRootState) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

type injectProps = ReturnType<typeof mapStateToProps>;
type injectActions = ReturnType<typeof mapDispatchToProps>;

class ${NAME} extends Component<IProps & injectProps & injectActions, IState> {

  state: IState = {
  };

  render() {
    return (
      <div>Component ${NAME}</div>
    );
  }
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(${NAME})