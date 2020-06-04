import React from 'react';
import { ProfileMainBlock } from 'components/Settings/Blocks/Profile/ProfileMainBlock';
import { ProfilePersonalBlock } from 'components/Settings/Blocks/Profile/ProfilePersonalBlock';

export const Profile = () => (
  <section className="profile">
    <h1>Profile Information</h1>
    <ProfileMainBlock />
    <ProfilePersonalBlock />
  </section>
);
