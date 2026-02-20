import { FunctionComponent } from "react";
import { SyncLoader } from "react-spinners";

import { LoadingContainer } from "./loading.styles";

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30} />
    </LoadingContainer>
  );
};

export default Loading;
