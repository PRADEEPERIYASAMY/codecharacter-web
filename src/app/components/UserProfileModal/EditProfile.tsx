import { faEnvelope, faFlag, faPen, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from 'app/styles/UserProfileModal.module.css';
import { InputName, InputState } from 'app/types/UserProfileModal';
import * as EditProfileInterfaces from 'app/types/UserProfileModal/EditProfile';
import classnames from 'classnames';
import * as React from 'react';
import { Row } from 'react-bootstrap';
// tslint:disable-next-line:import-name
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

export class EditProfile extends React.Component<EditProfileInterfaces.Props, {}> {
  public render() {
    const { handleEditProfile, onInputChange, inputEnabler } = this.props;
    const { editProfileRef, reactFlagRef } = this.props;
    const { username, listDisabled, fullName, email, country } = this.props;
    return (
      <div className="col-6">
        <Row className="mb-3">
          <div
            className={classnames('col-sm-12', styles.form)}
            style={{
              borderRight: '1px solid rgb(235, 235, 235)',
              color: 'red',
            }}
          >
            <div className={classnames('text-dark', styles.formHeading)}> Basic Information </div>
            <form
              className={'editForm'}
              noValidate
              ref={editProfileRef}
              onSubmit={handleEditProfile}
            >
              <div className="form-row">
                <div className="col mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="editValidationUsername"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      maxLength={50}
                      minLength={5}
                      value={username}
                      onChange={(e) => onInputChange(InputName.username, e.target.value)}
                      required
                      disabled={listDisabled.isUserNameDisabled}
                    />
                    <div className="input-group-append">
                      <span
                        className={classnames('input-group-text', styles.editPen, {
                          [`${styles.editPenActive}`]: !listDisabled.isUserNameDisabled,
                        })}
                        onClick={() => {
                          inputEnabler(
                            InputState.isUserNameDisabled,
                            !listDisabled.isUserNameDisabled,
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    </div>
                    <div className="invalid-feedback">Username must have minimum 5 characters.</div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUserTie} />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="editValidationFullname"
                      placeholder="Name"
                      aria-describedby="inputGroupPrepend"
                      maxLength={50}
                      minLength={5}
                      value={fullName}
                      onChange={(e) => onInputChange(InputName.fullName, e.target.value)}
                      required
                      disabled={listDisabled.isFullNameDisabled}
                    />
                    <div className="input-group-append">
                      <span
                        className={classnames('input-group-text', styles.editPen, {
                          [`${styles.editPenActive}`]: !listDisabled.isFullNameDisabled,
                        })}
                        onClick={() => {
                          inputEnabler(
                            InputState.isFullNameDisabled,
                            !listDisabled.isFullNameDisabled,
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    </div>
                    <div className="invalid-feedback">Name must have minimum 5 characters.</div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="editValidationEmail"
                      placeholder="Email"
                      aria-describedby="inputGroupPrepend"
                      value={email}
                      onChange={(e) => onInputChange(InputName.email, e.target.value)}
                      required
                      disabled={listDisabled.isEmailDisabled}
                    />
                    <div className="input-group-append">
                      <span
                        className={classnames('input-group-text', styles.editPen, {
                          [`${styles.editPenActive}`]: !listDisabled.isEmailDisabled,
                        })}
                        onClick={() => {
                          inputEnabler(InputState.isEmailDisabled, !listDisabled.isEmailDisabled);
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    </div>
                    <div className="invalid-feedback">Please enter a valid Email ID.</div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col sm={12} mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faFlag} />
                      </span>
                    </div>
                    <ReactFlagsSelect
                      searchable={true}
                      placeholder="Search for a country"
                      className="customFlag"
                      defaultCountry={country}
                      onSelect={(countryCode: string) =>
                        onInputChange(InputName.country, countryCode)
                      }
                      ref={reactFlagRef}
                      disabled={listDisabled.isFlagSelectDisabled}
                    />
                    <div className="input-group-append">
                      <span
                        className={classnames('input-group-text', styles.editPen, {
                          [`${styles.editPenActive}`]: !listDisabled.isFlagSelectDisabled,
                        })}
                        onClick={() => {
                          inputEnabler(
                            InputState.isFlagSelectDisabled,
                            !listDisabled.isFlagSelectDisabled,
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    </div>
                    <div className="invalid-feedback">Please select a country.</div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col text-center mb-2">
                  <button
                    className="btn btn-info"
                    type="submit"
                    style={{
                      width: '100%',
                    }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Row>
      </div>
    );
  }
}