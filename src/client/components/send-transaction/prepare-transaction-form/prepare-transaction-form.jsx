/* eslint-disable react/jsx-handler-names,react/prop-types */
// @flow
import * as React from "react";
import {Translate} from "react-redux-i18n";
import type {Dispatch} from "../../../types/redux";
import {Button, ButtonToolbar, Col, DropdownButton, MenuItem, Modal, Row} from "react-bootstrap";
// $FlowFixMe
import {Field, reduxForm, formValueSelector} from "redux-form";
// $FlowFixMe
import {connect} from "react-redux";
import inputIcon from "../../../images/copy-icon-2.png";
import alertIcon from "../../../images/alert-notice.png";
import Slider from "rc-slider";
// $FlowFixMe
import "rc-slider/assets/index.css";
import {Address} from "qtumcore-lib";


type Props = {
  dispatch: Dispatch,
  handleSubmit: Function,
  qtumAmount: number,
  isStandart: boolean,
  feeCoef: number,
  to: string,
  submitting: boolean,
  fields: Object,
  recommendedFee: number
}

const FEE_ORDER_OFFSET = 6;

export const selectFeeValue = (feeConst: number, feeCoef: number): number => {
  // eslint-disable-next-line no-magic-numbers
  const feeDifference = ((1 - feeConst) / 100);
  feeCoef = (feeCoef ? feeCoef : 0);
  return +(feeConst + (feeDifference * feeCoef)).toFixed(FEE_ORDER_OFFSET);
};

export const STANDART_FEE: number = 0.1;

type SliderProps = {
  disabled: boolean,
  input: Object
};

const renderSlider = (props: SliderProps) => (
  <Slider {...props.input} disabled={props.disabled}/>
);

type ErrorLabelProps = {
  message: any,
}

export const errorBlock = (props: ErrorLabelProps) => (
  <div className="error-block">
    <div className="error-image">
      <img src={alertIcon} width={22}/>
    </div>
    <div className="error-label">
      <Translate value={props.message}/>
    </div>
  </div>
);

const validate = (values: Object, props: Object) => {
  const errors = {};
  if (!values.to) {
    errors.to = "sendTransaction.prepareForm.errors.emptyAddress";
  } else if (!Address.isValid(values.to)) {
    errors.to = "sendTransaction.prepareForm.errors.invalidAddress";
  }
  if (!values.amount) {
    errors.amount = "sendTransaction.prepareForm.errors.emptyAmount";
  } else if (isNaN(+values.amount)) {
    errors.amount = "sendTransaction.prepareForm.errors.invalidAmount";
  } else {
    const fee = values.isStandart === "1"
      ? STANDART_FEE
      : selectFeeValue(props.recommendedFee, +values.feeCoef);
    if (props.qtumAmount < ((+values.amount) + (+fee))) {
      errors.amount = "sendTransaction.prepareForm.errors.amountLow";
    }
  }

  return errors;
};

const renderAddress = ({input, toValue, meta: {touched, error}}) => (
  <div className="input-section-wrapper">
    <div>
      <label htmlFor="to">
        <Translate value="sendTransaction.prepareForm.to"/>
      </label>
      <div className="input-address">
        <input {...input} className="address-input" type="text"/>
        {!toValue
          ? <div className="placeholder">
            <Translate value="sendTransaction.prepareForm.amountPlaceholder"/>
          </div>
          : ""}
        <div className="copy">
          <div className="copy-inner">
            <img src={inputIcon}/>
          </div>
        </div>
      </div>
    </div>
    {(touched && error) &&
      <div className="error-block-wrapper">
        {errorBlock({message: error})}
      </div>
    }
  </div>
);

const renderAmount = ({input, meta: {touched, error}}) => (
  <div className="input-section-wrapper">
    <div>
      <label htmlFor="amount">
        <Translate value="sendTransaction.prepareForm.amount"/>
      </label>
      <input {...input} name="amount" type="text"/>
    </div>
    {(touched && error) &&
      <div className="error-block-wrapper">
        {errorBlock({message: error})}
      </div>
    }
  </div>
);

let PrepareTransactionForm = (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Modal.Body>
        <Row>
          <Col className="input-section" xs={3}>
            <label htmlFor="token">
              <Translate value="sendTransaction.prepareForm.token"/>
            </label>
            <ButtonToolbar className="token-dropdown">
              <DropdownButton className="token" name="token" title="Qtum" id="token-type">
                <MenuItem eventKey="1">Qtum</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </Col>
          <Col xs={9} className="available-amount-block">
            <div className="available-amount-wrapper">
              <div className="available-amount-element">
                <Translate value="sendTransaction.prepareForm.availableAmount"/> {props.qtumAmount}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="input-section" xs={12}>
            <Field name="to" toValue={props.to} component={renderAddress}/>
          </Col>
        </Row>
        <Row>
          <Col className="input-section" xs={12}>
            <Field name="amount" component={renderAmount}/>
          </Col>
        </Row>
        <Row>
          <Col className="input-section" xs={12}>
            <label htmlFor="desc">
              <Translate value="sendTransaction.prepareForm.description"/>
            </label>
            <Field name="desc" component="textarea" type="text"/>
          </Col>
        </Row>
        <Row>
          <Col className="input-section" xs={12}>
            <label htmlFor="fee">
              <Translate value="sendTransaction.prepareForm.fee.label"/>
            </label>
            <Col xs={12} className="column-wrapper fee-radio-wrapper">
              <Field
                className="radio"
                name="isStandart"
                component="input"
                type="radio"
                value="1"
                id="is-standart"
              />
              <label htmlFor="is-standart">
                <div className="radio-label">
                  <Translate value="sendTransaction.prepareForm.fee.standart"/>
                </div>
                <div className="fee-value">{STANDART_FEE} Qtum</div>
              </label>
            </Col>
            <Col xs={12} className="column-wrapper">
              <Field
                className="radio"
                name="isStandart"
                component="input"
                type="radio"
                value="0"
                id="is-custom"
              />
              <label htmlFor="is-custom">
                <div className="radio-label">
                  <Translate value="sendTransaction.prepareForm.fee.custom"/>
                </div>
                <div className="fee-value">
                  {selectFeeValue(props.recommendedFee, props.feeCoef)} Qtum
                </div>
              </label>
            </Col>
            <Col xs={12} className="column-wrapper">
              <div className={`slider-wrapper ${!props.isStandart ? "active" : ""}`}>
                <div className="slow-label">
                  <Translate value="sendTransaction.prepareForm.fee.slow"/>
                </div>
                <div className="slider">
                  <Field defaultValue={10}
                         name="feeCoef" disabled={props.isStandart}
                         component={renderSlider}/>
                </div>
                <div className="quick-label">
                  <Translate value="sendTransaction.prepareForm.fee.quick"/>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={props.submitting}
                className="confirm-button primary-red-btn" type="submit">Confirm</Button>
      </Modal.Footer>
    </form>
  );
};
const selector = formValueSelector("PrepareTransactionForm");

// eslint-disable-next-line max-len
PrepareTransactionForm = reduxForm({form: "PrepareTransactionForm", validate})(PrepareTransactionForm);

PrepareTransactionForm = connect(state => {
  const isStandart = selector(state, "isStandart");
  return {
    initialValues: {
      isStandart: "1"
    },
    isStandart: isStandart === "1",
    feeCoef: selector(state, "feeCoef"),
    to: selector(state, "to")
  };
})(PrepareTransactionForm);

export default PrepareTransactionForm;
