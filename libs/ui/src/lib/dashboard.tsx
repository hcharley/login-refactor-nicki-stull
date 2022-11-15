import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { DashboardCard } from './dashboard-card';

export interface DashboardProps {
  title?: string;
  user: {
    name: string;
    username: string;
  };
}

export function Dashboard({
  title = 'Welcome to the Widget Inc. dashboard',
  user,
}: DashboardProps) {
  return (
    <Grid container spacing={2} direction="row">
      <Grid xs={12}>
        <Typography variant="h2" align="center">
          {title}
        </Typography>
        <Typography align="center">
          <span role="img" aria-label="Wave">
            👋
          </span>{' '}
          Hello <strong>{user.name}</strong>
        </Typography>
      </Grid>
      <Grid container>
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
