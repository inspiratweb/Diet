import React from 'react';
import { ProfileMainBlock } from '../ProfileMainBlock';
import { ProfilePersonalBlock } from '../ProfilePersonalBlock';

export const Profile = () => (
  <section className="profile">
    <h1>Profile Information</h1>
    <ProfileMainBlock />
    <ProfilePersonalBlock />
  </section>
);
