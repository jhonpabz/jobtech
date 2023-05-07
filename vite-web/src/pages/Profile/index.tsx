import { ReactElement, Fragment } from 'react';

import { CardComponent, PageWrapper } from '@components/index';

const Profile = (): ReactElement => {
  return (
    <Fragment>
      <PageWrapper>
        <CardComponent>
          <p>PROFILE</p>
        </CardComponent>
      </PageWrapper>
    </Fragment>
  );
};
export default Profile;
