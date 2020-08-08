import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Auth() {
    return <div>This is Auth</div>;
}

export default withAuthenticator(Auth);