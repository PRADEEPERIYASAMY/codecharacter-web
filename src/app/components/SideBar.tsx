import {
  faBell,
  faBook,
  faCode,
  faCodeBranch,
  faCog,
  faInfoCircle,
  faQuestionCircle,
  faSignInAlt,
  faSignOutAlt,
  faTrophy,
  faTv,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidePanelTab } from 'app/reducers/Dashboard';

import * as styles from 'app/styles/Sidebar.module.css';
import * as SideBarInterfaces from 'app/types/SideBar';

import classnames from 'classnames';
import * as React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

export class Sidebar extends React.Component<SideBarInterfaces.Props, {}> {
  public render() {
    const {
      setIsAuthenticationOpen,
      isLoggedIn,
      sidePanelTab,
      closeSidePanelTab,
      openSidePanelTab,
      logout,
      clearAllLogs,
    } = this.props;
    return (
      <div className={classnames('h-100', styles.Sidebar)}>
        <ButtonGroup
          vertical
          className={classnames('w-100 justify-content-center align-items-center', styles.Sidebar)}
        >
          <Button
            className={classnames(
              'py-2 px-auto text-white d-flex justify-content-center',
              styles.customBtn,
            )}
            onClick={() => closeSidePanelTab()}
          >
            <FontAwesomeIcon icon={faCode} />
          </Button>

          <Button
            className={classnames('py-2 px-auto documentation-btn-ctrl', styles.customBtn, {
              [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.DOCS,
            })}
            id="docs_button"
            title={'Docs'}
            onClick={() =>
              sidePanelTab !== SidePanelTab.DOCS
                ? openSidePanelTab(SidePanelTab.DOCS)
                : closeSidePanelTab()
            }
          >
            <FontAwesomeIcon icon={faBook} />
          </Button>
          <Button
            className={classnames('py-2 px-auto editor-settings-btn-ctrl', styles.customBtn, {
              [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.EDITOR_SETTINGS,
            })}
            id="editor_settings_button"
            title={'Editor Settings'}
            onClick={() =>
              sidePanelTab !== SidePanelTab.EDITOR_SETTINGS
                ? openSidePanelTab(SidePanelTab.EDITOR_SETTINGS)
                : closeSidePanelTab()
            }
          >
            <FontAwesomeIcon icon={faCog} />
          </Button>
          <a
            href="/#/leaderboard"
            className={classnames('py-2 px-auto leaderboard-btn-ctrl', styles.customBtn, {
              [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.LEADERBOARD,
            })}
            id="leaderboard_button"
            title={'Leaderboard'}
            onClick={() => clearAllLogs()}
          >
            <FontAwesomeIcon icon={faTrophy} />
          </a>
          {isLoggedIn ? (
            <Button
              className={classnames('py-2 px-auto commitLog-btn-ctrl', styles.customBtn, {
                [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.COMMIT_LOG,
              })}
              id="commit_log_button"
              title={'Commit Log'}
              onClick={() =>
                sidePanelTab !== SidePanelTab.COMMIT_LOG
                  ? openSidePanelTab(SidePanelTab.COMMIT_LOG)
                  : closeSidePanelTab()
              }
            >
              <FontAwesomeIcon icon={faCodeBranch} />
            </Button>
          ) : null}
          {isLoggedIn ? (
            <Button
              className={classnames('py-2 px-auto match-btn-ctrl', styles.customBtn, {
                [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.MATCH,
              })}
              id="matchView_button"
              title={'Battle TV'}
              onClick={() => {
                sidePanelTab !== SidePanelTab.MATCH
                  ? openSidePanelTab(SidePanelTab.MATCH)
                  : closeSidePanelTab();
              }}
            >
              <FontAwesomeIcon icon={faTv} />
            </Button>
          ) : null}
          <Button
            className={classnames('py-2 px-auto notification-btn-ctrl', styles.customBtn, {
              [`${styles.customBtnActive}`]: sidePanelTab === SidePanelTab.NOTIFICATION,
            })}
            id="notifications_button"
            title={'NOTIFICATIONS'}
            onClick={() =>
              sidePanelTab !== SidePanelTab.NOTIFICATION
                ? openSidePanelTab(SidePanelTab.NOTIFICATION)
                : closeSidePanelTab()
            }
          >
            <FontAwesomeIcon icon={faBell} />
          </Button>

          <Button
            href={'/#/profile'}
            className={classnames('py-2 px-auto', styles.customBtn)}
            id="user_profile_button"
            title={isLoggedIn ? 'Profile' : 'Login'}
            onClick={() => {
              clearAllLogs();
              if (!isLoggedIn) {
                setIsAuthenticationOpen(true);
                return;
              }
            }}
          >
            <FontAwesomeIcon icon={isLoggedIn ? faUser : faSignInAlt} />
          </Button>
          {isLoggedIn ? (
            <Button
              className={classnames('py-2 px-auto', styles.customBtn)}
              id="logout_button"
              title={'Logout'}
              onClick={() => {
                logout();
                this.resetCompleteState();
              }}
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Button>
          ) : null}
          <a
            className={classnames(
              'py-2 px-auto notification-btn-ctrl',
              styles.customBtn,
              styles.infoCircle,
            )}
            title={'Home'}
            href="/#/home"
            onClick={() => clearAllLogs()}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </a>
          <Button
            className={classnames('py-2 px-auto', styles.joyRide)}
            id="joyride_button"
            title={'Take a tour'}
            onClick={() => this.props.toggleReactTour()}
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
          </Button>
          <Button
            className={classnames('py-2 px-auto', styles.deltaLogo)}
            id="delta_logo"
            title={'Made with ❤ by Delta Force'}
          >
            <a href="https://delta.nitt.edu" target="_blank">
              <img src="assets/img/deltaLogo.png" height={20} width={20} />
            </a>
          </Button>
        </ButtonGroup>
      </div>
    );
  }

  private resetCompleteState = (): void => {
    const { resetAppState } = this.props;
    resetAppState();
  };
}

export default Sidebar;
