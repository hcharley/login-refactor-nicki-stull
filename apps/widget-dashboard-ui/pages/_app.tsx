import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import { UserData } from './api/login';
import './styles.css';

function WidgetIncDashboardApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // TODO: Memomize this
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    setIsLoading(false);
    const data = await response.json();
    if (!response.ok) {
      setErrorMessage('Failed to login');
      if (data?.error === true) {
        setErrorMessage(data.message);
      }
      return;
    }
    setUser(data);
  };

  return (
    <>
      <Head>
        <title>Widget Inc Dashboard</title>
      </Head>
      <main className="app">
        {!user ? (
          <Dialog open>
            <DialogTitle>Login to Widget Inc Dashboard</DialogTitle>
            <DialogContent>
              <form onSubmit={onSubmit}>
                <Grid
                  sx={{ p: 1, width: 360 }}
                  container
                  direction={'column'}
                  spacing={2}
                >
                  <Grid item>
                    <TextField
                      required
                      label="Username"
                      fullWidth
                      margin="none"
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      required
                      label="Password"
                      fullWidth
                      margin="none"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <LoadingButton
                      loading={isLoading}
                      variant="contained"
                      type="submit"
                    >
                      Login
                    </LoadingButton>
                  </Grid>
                  {errorMessage && (
                    <Grid item>
                      <Alert severity="error">{errorMessage}</Alert>
                    </Grid>
                  )}
                </Grid>
              </form>
            </DialogContent>
          </Dialog>
        ) : (
          <Component user={user} {...pageProps} />
        )}
      </main>
    </>
  );
}

export default WidgetIncDashboardApp;
