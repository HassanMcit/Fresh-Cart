import { FallingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen fixed inset-0 bg-primary z-50 center-content">
      <FallingLines
        color="#4fa94d"
        width="200"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
}
