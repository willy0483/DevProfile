import "./App.scss";

import { Main } from "./components/main/main";
import { Grid } from "./components/grid/grid";

// all my routes
import { AppRoutes } from "./routes/appRoutes";

function App() {
  return (
    <>
      <Grid>
        <Main>
          <AppRoutes />
        </Main>
      </Grid>
    </>
  );
}

export default App;
