import { SidePanelTab } from 'app/reducers/Dashboard';

export interface StateProps {
  sidePanelTab: SidePanelTab;
}

export interface DispatchProps {
  closeSidePanelTab: () => void;
  logout: () => void;
  openSidePanelTab: (type: SidePanelTab) => void;
}

export type Props = StateProps & DispatchProps;
