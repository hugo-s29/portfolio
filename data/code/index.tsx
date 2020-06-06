import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("./wrapper"), { ssr: false });

export default Wrapper;
