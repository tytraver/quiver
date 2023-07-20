import WeekPlanner from './components/planner/planner-layout';
import Toolbar from './components/toolbar/toolbar';
import styles from './page.module.scss';

export default async function Index() {
  return (
    <div className={styles.page}>
      <Toolbar />
      <WeekPlanner />
    </div>
  );
}
