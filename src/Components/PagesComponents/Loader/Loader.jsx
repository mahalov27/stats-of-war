import { Grid } from "react-loader-spinner";

const Loader = (props) => {
  const { size, position, heightWrap, widthWrap, justifyCont } = props;

  return (
    <Grid
      height={size ? size : "50"}
      width={size ? size : "50"}
      color="#5a5a5a"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{
        display: "flex",
        justifyContent: justifyCont ? justifyCont : "center",
        alignItems: position ? position : "center",
        height: heightWrap ? heightWrap + "px" : "100vh",
        width: widthWrap ? widthWrap + "px" : "100%",
        pointerEvents: "none",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
