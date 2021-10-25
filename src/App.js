import { RecoilRoot } from "recoil";
import { Userprovider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Userprovider>
        <Router />
      </Userprovider>
    </RecoilRoot>
  );
}
