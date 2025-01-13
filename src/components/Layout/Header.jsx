import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7' }}>
          Graphs
        </Link>

        {isAuthenticated && !isLoading && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#E2F0F7',
            }}
          >
            <img
              src={user.picture}
              alt={user.name}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid #E2F0F7',
              }}
            />
            <span>{user.name}</span>
          </div>
        )}

        {isLoading ? (
          <div style={{ color: '#E2F0F7' }}>Loading...</div>
        ) : isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #E2F0F7',
              color: '#E2F0F7',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #E2F0F7',
              color: '#E2F0F7',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export { HeaderContent };
