// The BYOC bundle imports external (BYOC) components into the app and makes sure they are ready to be used
import BYOC from 'src/byoc';
import CdpPageView from 'components/Startup/CdpPageView';
import FEAASScripts from 'components/Startup/FEAASScripts';

const Scripts = (): JSX.Element => {
  return (
    <>
      <BYOC />
      <CdpPageView />
      <FEAASScripts />
    </>
  );
};

export default Scripts;
