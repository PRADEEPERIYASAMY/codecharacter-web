import * as commitLogStyles from 'app/styles/CommitLog.module.css';
import * as CommitInterfaces from 'app/types/code/CommitElement';
import classnames from 'classnames';
import * as React from 'react';

export class CommitElement extends React.Component<CommitInterfaces.Props, CommitInterfaces.State> {
  private static commitImgType = {
    COMMIT_HEAD: 'assets/img/commit-head.png',
    COMMIT_HEAD_HOVER: 'assets/img/commit-head-hover.png',
    COMMIT_INITIAL: 'assets/img/commit-initial.png',
    COMMIT_INITIAL_HOVER: 'assets/img/commit-initial-hover.png',
    COMMIT_MIDDLE: 'assets/img/commit.png',
    COMMIT_MIDDLE_HOVER: 'assets/img/commit-hover.png',
  };

  constructor(props: CommitInterfaces.Props) {
    super(props);
    this.state = {
      imgType: CommitElement.commitImgType.COMMIT_INITIAL,
      isHovered: false,
    };
  }

  public componentDidMount() {
    this.setImgType();
  }

  public componentDidUpdate(prevProps: CommitInterfaces.Props, prevState: CommitInterfaces.State) {
    if (
      prevProps.index !== this.props.index ||
      prevProps.commitsLength !== this.props.commitsLength ||
      prevState.isHovered !== this.state.isHovered ||
      prevProps.isCurrentHash !== this.props.isCurrentHash
    ) {
      this.setImgType();
    }
  }

  public setImgType() {
    const { index, isCurrentHash } = this.props;
    const { isHovered } = this.state;
    let imgType;
    if (index === 0) {
      if (isHovered || isCurrentHash) imgType = CommitElement.commitImgType.COMMIT_HEAD_HOVER;
      else imgType = CommitElement.commitImgType.COMMIT_HEAD;
    } else if (index === this.props.commitsLength - 1) {
      if (isHovered || isCurrentHash) imgType = CommitElement.commitImgType.COMMIT_INITIAL_HOVER;
      else imgType = CommitElement.commitImgType.COMMIT_INITIAL;
    } else {
      if (isHovered || isCurrentHash) imgType = CommitElement.commitImgType.COMMIT_MIDDLE_HOVER;
      else imgType = CommitElement.commitImgType.COMMIT_MIDDLE;
    }
    this.setState({
      imgType,
    });
  }

  public render() {
    const { commitDetails } = this.props;

    return (
      <div
        onClick={this.props.onClick}
        onMouseEnter={() => {
          this.setState({ isHovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHovered: false });
        }}
        className={classnames(
          commitLogStyles.Commit,
          'list-group-item',
          'list-group-item-action',
          'flex-column',
          'align-items-start',
        )}
      >
        <div className={classnames(commitLogStyles.CommitDetails)}>
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">{commitDetails.message}</h6>
          </div>
          <p className={classnames('mb-2', commitLogStyles.CommitDate)}>
            {new Date(commitDetails.date).toUTCString()}
          </p>
          <small style={{ color: '#ddd' }}>{commitDetails.hash.substring(0, 7)}</small>
        </div>
        <div style={{ width: '20%', marginLeft: '80%' }}>
          <img src={this.state.imgType} style={{ height: '100px' }} width={40} />
        </div>
      </div>
    );
  }
}
