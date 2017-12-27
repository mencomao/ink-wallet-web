/* eslint-disable no-undef */
// @flow
import * as React from "react";
import {Translate} from "react-redux-i18n";
import type {State} from "../../../initial-state";
import type {Dispatch} from "../../../types/redux";
import Mnemonic from "bitcore-mnemonic";
// $FlowFixMe
import {connect} from "react-redux";
import successLogo from "../../../images/success.png";
import {tryToLogin} from "../../../actions/login-actions";
import {ROUTE_URLS} from "../../../routes";
// $FlowFixMe
import {Link} from "react-router";
import Image from "../../common/image/image";

type Props = {
  dispatch: Dispatch,
  mnemonic: Mnemonic,
  password: string,
  seed: Uint8Array
}

class RestoreSuccess extends React.Component<Props> {
  constructor(props) {
    super(props);
    (this: any).handleClickNext = this.handleClickNext.bind(this);
  }

  handleClickNext(): void {
    this.props.dispatch(tryToLogin(
      this.props.seed,
      this.props.password
    ));
  }

  render() {
    return (
      <div>
        <div className="create-title-panel reset">
          <div className="success-logo">
            <img src={successLogo}/>
            <Image
              src={successLogo}
            />
          </div>
          <div className="create-title">
            <Translate value="restoreWallet.restoreSuccessTitle"/>
          </div>
        </div>
        <div className="create-desc-panel">
          <div className="create-desc reset">
            <Translate value="restoreWallet.restoreInfo.info1"/>
          </div>
          <div className="create-desc reset">
            <Translate value="restoreWallet.restoreInfo.info2"/>
          </div>
          <div className="create-desc reset">
            <Translate value="restoreWallet.restoreInfo.info3"/>
          </div>
        </div>
        <div className="show-mnemonics-btn-panel">
          <a className="primary-red-btn">
            <Translate value="createWallet.showMnemonicDownloadBtn"/>
          </a>
          <Link to={ROUTE_URLS.MAIN_PAGE}
                onClick={this.handleClickNext} className="primary-white-btn bordered">
            <Translate value="createWallet.showMnemonicNextBtn"/>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): Object => {
  return {
    mnemonic: state.creationState.mnemonic,
    password: state.creationState.password,
    seed: state.creationState.seed
  };
};

export default connect(mapStateToProps, (dispatch: Dispatch) => ({dispatch}))(RestoreSuccess);
