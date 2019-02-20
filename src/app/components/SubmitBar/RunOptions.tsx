import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubmissionActions } from 'app/actions';
import * as styles from 'app/styles/RunOptions.module.css';
import * as SubmitBarInterfaces from 'app/types/SubmitBar';
import classnames from 'classnames';
import * as React from 'react';

export class RunOptions extends React.Component<
  SubmitBarInterfaces.RunOptionsProps,
  SubmitBarInterfaces.RunOptionsOwnState
> {
  constructor(props: SubmitBarInterfaces.RunOptionsProps) {
    super(props);
    this.state = {
      currentIndex: -1,
      isMapToggle: false,
    };
  }

  public componentWillMount(): void {
    this.props.loadMaps();
  }

  public render() {
    const { maps } = this.props;

    const options = [{
      icon: <FontAwesomeIcon icon={faBrain} />,
      name: 'Self Code Match',
      type: SubmissionActions.Type.SELF_MATCH,
    }];

    const mapsOptions = (
      <div className={classnames(styles['dropdown-submenu'])}>
        {maps.map((map) => (
          <div
            key={map.mapId}
            className={classnames(styles.dropdownItem)}
            onClick={() => this.props.startMatch(options[this.state.currentIndex].type, map.mapId)}
          >
            <span className={classnames(styles.dropdownName)}>{map.name}</span>
          </div>
        ))}
      </div>
    );

    return (
      <div className={classnames(styles.dropdown)}>
        {options.map((option, index) => {
          return (
            <div>
              <div
                key={index}
                className={classnames(styles.dropdownItem)}
                onClick={() => this.toggleMapsOptions(index)}
              >
                <span className={classnames(styles.dropdownItemName)}>{option.name}</span>
                <span className={classnames(styles.dropdownItemIcon)}>{option.icon}</span>
              </div>
              <div>
                {this.state.isMapToggle && (this.state.currentIndex === index) ?  mapsOptions : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  private toggleMapsOptions = (currentIndex: number) => {
    if (this.state.currentIndex === currentIndex) {
      this.setState({
        currentIndex: -1,
        isMapToggle: false,
      });
    } else {
      this.setState({
        currentIndex,
        isMapToggle: true,
      });
    }
  };
}