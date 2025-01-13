import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card } from 'antd';

function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        minHeight: '80vh',
      }}
    >
      <Card>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
          }}
        >
          <img
            src={user.picture}
            alt={user.name}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '1px solid #ddd',
            }}
          />
          <div>
            <h1 style={{ marginBottom: '1rem' }}>{user.name}</h1>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {user.nickname && (
              <p>
                <strong>Nickname:</strong> {user.nickname}
              </p>
            )}
            {user.email_verified && (
              <p>
                <strong>Email Verified:</strong> Yes
              </p>
            )}
            <p>
              <strong>Last Updated:</strong>{' '}
              {new Date(user.updated_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export { ProfilePage };
