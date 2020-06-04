import React from 'react';
import { DeleteAccountBlock } from 'components/Settings/Blocks/Account/DeleteAccountBlock';
import { ChangeEmailBlock } from '../Blocks/Account/ChangeEmailBlock';
import { ChangePasswordBlock } from '../Blocks/Account/ChangePasswordBlock';

export const Account = () => (
  <section className="profile">
    <h1>Account Settings</h1>
    <ChangePasswordBlock />
    <ChangeEmailBlock />
    <DeleteAccountBlock />
  </section>
);
