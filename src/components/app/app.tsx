import MainPage from '../../pages/main-page/main-page';

interface AppProps {
  offersCount: number;
}

const App = ({ offersCount }: AppProps) => (
  <MainPage offersCount={offersCount} />
);

export default App;
